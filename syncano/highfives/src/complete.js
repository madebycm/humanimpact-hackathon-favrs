import Syncano from 'syncano-server'

export default (ctx) => {
  const {data, response} = Syncano(ctx)

  if(!ctx.meta.user){
  	response.json({error: "No user found"}, 403);
  	return;
  }

  data.highfives.update(ctx.args.id, {
    status: 'completed',
  }).then(r => {
    response.json({status: "OK", response: r});
  }).catch(e => console.log("Fucked up", e))

}
