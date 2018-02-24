import Syncano from 'syncano-server'

export default async (ctx) => {
  const {users, response, socket} = Syncano(ctx)

  if(!ctx.meta.user) return response.json({error: "No user found in context magic syncano meta stuff", user: {}}, 400);

  // const allhf = await socket.get("/highfives/getAllHighfives", {user_id: ctx.meta.user.id})
  // const myhf = await socket.get("/highfives/getMyHighfives", {user_id: ctx.meta.user.id})

  users.find(ctx.meta.user.id)
    .then(user => response.json(user))
    .catch(e => console.log(e))

}
