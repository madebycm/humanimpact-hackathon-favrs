import Syncano from 'syncano-server'

export default async (ctx) => {
  const {response, data} = Syncano(ctx)

  try {
    const allHighFives = await data.highfives.list()
    const allHighFivesExceptMy = allHighFives
      .filter(hf => hf.status === 'confirmed')
      .filter(hf => hf.to_user !== ctx.meta.user.id && hf.from_user !== ctx.meta.user.id)

    response.json(allHighFivesExceptMy)
  } catch (e) {
    response.json(e, 400)
  }
}
