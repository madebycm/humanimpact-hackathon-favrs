import Syncano from 'syncano-server'

export default async (ctx) => {

  const {users, response, data} = Syncano(ctx)
  
  let allHighFives = await data.highfives.list()
  // allHighFives = allHighFives.filter(hf => hf.to_user != ctx.args.user_id || hf.from_user != ctx.args.user_id)

  const myHighFives = allHighFives.filter(hf => hf.to_user === ctx.args.user_id || hf.from_user === ctx.args.user_id)
  
  response.json(myHighFives)

}
