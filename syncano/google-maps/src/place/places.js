import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const {data, response, logger, users, endpoint, event} = new Server(ctx)
  const {GOOGLE_MAPS_API_KEY} = ctx.config
  const {location, radius=5000, keyword, type,params={}} = ctx.args
  try {
    const res = await fetch.get(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          location,
          radius,
          keyword,
          type,
          ...params
        }
      }
    )
    if(res.data.results.length === 0){
      return response("No results",404)
    }
    return response.json(res.data.results)
  } catch ({data}) {
    return response.json(data)
  }
}
