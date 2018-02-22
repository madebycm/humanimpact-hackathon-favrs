import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const {data, response, logger, users, endpoint, event} = new Server(ctx)
  const {GOOGLE_MAPS_API_KEY}  = ctx.config
  const {location, radius, address, params ={}} = ctx.args
  try {
  const res = await fetch.get(
    'https://maps.googleapis.com/maps/api/geocode/json',
    {
      params: {
        key: GOOGLE_MAPS_API_KEY,
        latlng:location,
        address,
        radius,
        ...params
      }
    }
  )
  return response.json(res.data.results)
  } catch (error) {
    return response.json(error)
  }
}
