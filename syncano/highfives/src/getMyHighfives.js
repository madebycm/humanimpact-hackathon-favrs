import Syncano from 'syncano-server'

export default async (ctx) => {

  const {users, response, data} = Syncano(ctx)

  if(!ctx.meta.user) response.json({err: "No user in meta"})

  const allHighFives = await data.highfives.list()
  const myHighFives = allHighFives.find(hf => hf.to_user === ctx.meta.user.id || hf.from_user === ctx.meta.user.id)
  
  response.json(myHighFives)

}
