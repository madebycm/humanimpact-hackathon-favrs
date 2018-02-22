import Server from '@syncano/core'
import fetch from 'axios'
import fileType from 'file-type'
export default async ctx => {
    const { data, response } = new Server(ctx)
    try {
        const { photo: photoreference, maxWidth = 1000, maxHeight = 1000 } = ctx.args
        const { GOOGLE_MAPS_API_KEY } = ctx.config
        const res = await fetch.get(
            'https://maps.googleapis.com/maps/api/place/photo',
            {
                params: {
                    key: GOOGLE_MAPS_API_KEY,
                    photoreference,
                    maxwidth: maxWidth,
                },
                responseType: 'arraybuffer'
            }
        )
        let fb = res.data
        let ft = fileType(fb)
        return response(fb, 200, ft.mime)
    } catch (error) {
        return response.json({ message: error.message }, 400)
    }
}