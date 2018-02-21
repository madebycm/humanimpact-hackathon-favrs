import Syncano from 'syncano-server'

export default (ctx) => {
	const {users, response} = Syncano(ctx)
	
	return users.list()
	  .then(list => {
	  	response.json(list)
	  })
	  .catch(err => console.log)

}