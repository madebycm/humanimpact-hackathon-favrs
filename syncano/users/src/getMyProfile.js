import Syncano from 'syncano-server'

export default (ctx) => {
  const {users, response} = Syncano(ctx)

  if(!ctx.meta.user) return response.json({error: "No user found in context magic syncano meta stuff", user: false});

  users.find(ctx.meta.user.id).then(e => {
    return response.json({user: e})
  }).catch(e => console.log(e))

}
