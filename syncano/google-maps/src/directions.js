import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const {data, response, logger, users, endpoint, event} = new Server(ctx)
  const {origin, destination, mode,params={}} = ctx.args
  const {GOOGLE_MAPS_API_KEY} = ctx.config
  try {
    console.log(ctx.args)
    const res = await fetch.get(
      'https://maps.googleapis.com/maps/api/directions/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          origin,
          destination,
          mode,
          ...params
        }
      }
    )
    console.log("XXX", res.data)
    return response.json(res.data)
  } catch (error) {
    return response.json(error)
  }
}
