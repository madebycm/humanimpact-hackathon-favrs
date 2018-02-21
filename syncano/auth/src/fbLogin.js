import FB from 'fb'
import Syncano from 'syncano-server'

export default (ctx) => {
  const {users, response, logger} = Syncano(ctx)
  const {debug} = logger('hello script')

  const accessToken = ctx.args.code

  FB.api('me', { fields: 'id,name,picture', access_token: accessToken }, async (res) => {
    debug('fb response', res)
    try {
      debug('finding user')
      const user = await users
        .fields('id', 'user_key', 'full_name')
        .firstOrCreate(
        {
          fb_id: res.id,
          full_name: res.name,
          picture_url: res.picture.data.url
        },
        {
          username: res.id,
          password: Math.random().toString(36).slice(-8),
          full_name: res.name
        }
      )
      debug('user', user)
      return response.json(user)
    } catch (err) {
      debug('user not found')
      return response.json({msg: 'Error!'}, 400)
    }
  })
}
