import Server from '@syncano/core'
export default async ctx => {
    const {data, response, endpoint } = new Server(ctx)
    try {
      const {
        location
      } = ctx.args
      const [{formatted_address}] = await endpoint.get('google-maps/geocoding',{location})
      return response.json({formatted_address})
    } catch ({data}) {
        return response.json(data,400)
    }
}