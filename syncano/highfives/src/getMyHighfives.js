import Syncano from 'syncano-server'

export default async (ctx) => {

  const {users, response, data} = Syncano(ctx)
  
  const allHighFives = await data.highfives.list()
  const myHighFives = allHighFives.find(hf => hf.to_user === ctx.args.user_id || hf.from_user === ctx.args.user_id)
  
  response.json(myHighFives)

}
