import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const {data, response} = new Server(ctx)
  const {GOOGLE_MAPS_API_KEY} = ctx.config
  const {keyword,params={}} = ctx.args
  try {
    const res = await fetch(
      'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      {
        params: {
          key: GOOGLE_MAPS_API_KEY,
          types:"geocode",
          input:keyword,
          ...params
        }
      }
    )
    return response.json(res.data.predictions.map(p => p.description))
  } catch ({message}) {
    return response.json({message})
  }
}
