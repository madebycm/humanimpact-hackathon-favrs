import Server from '@syncano/core'
export default async ctx => {
  const {data, response, logger, users, endpoint, event} = new Server(ctx)
  const {origin, destination, mode = 'driving'} = ctx.args
  const {GOOGLE_MAPS_API_KEY} = ctx.config
  try {
    const directions = await endpoint.get('google-maps/directions', {
      origin,
      destination,
      mode
    })
    return response.json(directions.routes[0].legs[0].distance)
  } catch ({data}) {
    return response.json(data)
  }
}
