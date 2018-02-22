import Server from '@syncano/core'
import fetch from 'axios'
export default async ctx => {
    const { data, response, logger, users, endpoint, event } = new Server(ctx)
    const { GOOGLE_MAPS_API_KEY } = ctx.config
    const { placeId:placeid, params = {} } = ctx.args
    try {
        const {data:{result}} = await fetch.get(
            'https://maps.googleapis.com/maps/api/place/details/json',
            {
                params: {
                    key: GOOGLE_MAPS_API_KEY,
                    placeid,
                    ...params
                }
            }
        )
        if (!result) {
            return response("No results", 404)
        }
        return response.json(result)
    } catch ({ data }) {
        return response.json(data)
    }
}
