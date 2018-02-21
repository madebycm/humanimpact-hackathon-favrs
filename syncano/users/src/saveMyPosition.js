import Syncano from 'syncano-server'

export default (ctx) => {
  const {data, users, response} = Syncano(ctx)

  if(!ctx.meta.user){
  	response.json({error: "No user found"}, 403);
  	return;
  } 

  users.update(ctx.meta.user.id, {last_position: ctx.args.position}).then(r => {
    response.json({status: "OK", response: r});
  }).catch(e => console.log("Fucked up", e))

}