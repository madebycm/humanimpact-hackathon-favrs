import Syncano from 'syncano-server'

export default async (ctx) => {
  const {users, response, data} = Syncano(ctx)
  const allHighFives = await data.highfives.list()
  
  response.json(allHighFives)

}
