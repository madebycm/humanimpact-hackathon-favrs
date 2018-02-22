import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const {data, response, logger, users, endpoint, event} = new Server(ctx)
  const {GOOGLE_MAPS_API_KEY} = ctx.config
  const {location, radius, keyword:input, type,params={}} = ctx.args
  try {
    const res = await fetch.get(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          location,
          radius,
          input,
          type,
          ...params
        }
      }
    )
    if(res.data.predictions.length === 0){
      return response("No results",404)
    }
    return response.json(res.data.predictions)
  } catch ({data}) {
    return response.json(data)
  }
}
