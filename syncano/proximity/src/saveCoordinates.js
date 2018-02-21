import Syncano from 'syncano-server'

export default (ctx) => {
  const {data, response} = Syncano(ctx)

  if(!ctx.meta.user){
  	response.json({error: "No user found"}, 403);
  	return;
  } 

  data.location.create({
    coordinates: {
    	latitude: ctx.args.latitude,
    	longitude: ctx.args.longitude
    },
    user: ctx.meta.user.id
  })
  .then(locationObj => {
    response.json({status: "OK", msg: `Loc with ID ${locationObj.id} created!`, locationObj: locationObj})
  })

}