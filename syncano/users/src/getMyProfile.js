import Syncano from 'syncano-server'

export default async (ctx) => {
  const {users, response, socket} = Syncano(ctx)

  console.log("Hello, Siwek", ctx.meta.user);

  if(!ctx.meta.user) return response.json({error: "No user found in context magic syncano meta stuff", user: false}, 400);

  const allhf = await socket.get("/highfives/getAllHighfives")
  const myhf = await socket.get("/highfives/getMyHighfives", {user_id: ctx.meta.user.id})

  users.find(ctx.meta.user.id).then(e => {
    return response.json({user: e, myhf: myhf, allhf: allhf})
  }).catch(e => console.log(e))

}
