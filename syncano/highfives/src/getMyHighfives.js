import Syncano from 'syncano-server'

export default async (ctx) => {

  const {users, response, data} = Syncano(ctx)

  if(!ctx.meta.user) return response.json({error: "No user found in context magic syncano meta stuff", user: {}}, 400);

  try {
    const allHighFives = await data.highfives.list()

    const myHighFives = allHighFives
    .filter(hf => hf.status === 'confirmed')
    .filter(hf => hf.to_user === ctx.meta.user.id || hf.from_user === ctx.meta.user.id)

    response.json(myHighFives)
  } catch (e) {
    response.json(e, 400)
  }
}
