import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
  const { data, response, logger, users, endpoint, event } = new Server(ctx)
  const { GOOGLE_MAPS_API_KEY } = ctx.config
  const { keyword, placeId, params = {} } = ctx.args
  const { instance } = ctx.meta
  try {
    let pid = placeId
    if (!pid) {
      const res = await endpoint.post("google-maps/placeAutocomplete", ctx.args)
      let [bestMatch] = res
      if (!bestMatch) {
        return response("No results", 404)
      }
      let { place_id } = bestMatch
      pid = place_id
    }
    const placeDetails = await endpoint.post("google-maps/placeDetails", { placeId: pid })
    let { photos } = placeDetails
    if(!photos){
      return response.json({message:'No results'},404)
    }
    photos = photos
      .map(p => `https://${instance}.syncano.space/google-maps/placePhotoById/?photo=${p.photo_reference}`)
    return response.json(photos)
  } catch (error) {
    console.log(error)
    return response.json({ message: error.message }, 400)
  }
}
