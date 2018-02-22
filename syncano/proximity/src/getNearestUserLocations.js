import axios from 'axios'
import Syncano from 'syncano-server'

export default async (ctx) => {
  const {socket, users, response, logger} = Syncano(ctx)
  const {debug} = logger("go");

  if(!ctx.meta.user){
  	response.json({error: "Dont even think about it"})
  }

  const allUsers = await users.list()
  const myUser = allUsers.find(user => user.id === ctx.meta.user.id);

  	const userspromises = allUsers.map(user => {
  		const last_pos = user.last_position;
  		if(last_pos){
  			const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${myUser.last_position.latitude},${myUser.last_position.longitude}&destinations=${user.last_position.latitude},${user.last_position.longitude}&key=AIzaSyDs7R8OmPGjVn9-aRFmCHX85VS_17Sii_I`;

  			return axios.get(url).then(geodata => ({
  					geodata: geodata.data,
  					userdata: user
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


  	// const userspromises = allUsers.reduce((accz, user) => {
  	// 	const last_pos = user.last_position
  	// 	// console.log("its whatever", accz);
  	// 	accz.push("yo");
  	// 	return accz;
  	// 	// if(last_pos){
  	// 	// 	const url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=59.9151694,10.7500001&destinations=59.9151694,10.7500001&key=AIzaSyDs7R8OmPGjVn9-aRFmCHX85VS_17Sii_I";
  		// 	axios.get(url).then(ggl => {
  		// 		const element = ggl.data.rows[0].elements[0];
  		// 		if(element) {
  		// 			accz.push(element)
  		// 		}
  		// 		return accz;
  		// 	}).catch(e => console.log("axxios err", e));
  		// }
  	// }, [])

  // console.log(userspromises);

  	// Promise.all(userspromises).then(allPromises => {
  	// 	console.log(allPromises);
  	// })



  // users.find(ctx.meta.user.id).then(e => {
  //   return response.json({user: e})
  // }).catch(e => console.log(e))

}
