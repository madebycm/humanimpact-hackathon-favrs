import axios from 'axios'
import Syncano from 'syncano-server'

export default async (ctx) => {
  const {socket, users, response, logger, data} = Syncano(ctx)
  const {debug} = logger("go");

  if(!ctx.meta.user){
  	response.json({error: "Dont even think about it"}, 403)
  }


  const allUsers = await users.list()
  const highFives = await data.highfives.where('to_user', ctx.meta.user.id)

  const myUser = allUsers.find(user => user.id === ctx.meta.user.id);

  	const userspromises = allUsers.map(user => {
  		const last_pos = user.last_position;
  		if(last_pos){
  			const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${myUser.last_position.latitude},${myUser.last_position.longitude}&destinations=${user.last_position.latitude},${user.last_position.longitude}&key=AIzaSyDs7R8OmPGjVn9-aRFmCHX85VS_17Sii_I`;

  			return axios.get(url).then(geodata => ({
  					geodata: geodata.data.rows[0].elements[0],
  					userdata: user,
  					highfive: highFives.find('from_user', user.id)
  			}));
		}
  	})

  	Promise.all(userspromises).then(allPromises => {
  		const reduced = allPromises.reduce( (acc, promise) => {
  			if(promise){
  				acc.push(promise)
  			}
  			return acc;
  		}, [])

	  	const filtered = reduced.filter(item => item.userdata.id !== myUser.id)

  		return response.json(filtered);
  	})

}
