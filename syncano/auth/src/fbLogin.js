import FB from 'fb'
import Syncano from 'syncano-server'

export default (ctx) => {
  const {users, response, logger, socket} = Syncano(ctx)
  const {debug} = logger('hello script')

  const accessToken = ctx.args.access_token

  return FB.api('me', { fields: 'id,name,picture', access_token: accessToken }, async (res) => {
    try {
      // debug('finding user', res.id)
      const user = await users
        // .fields('fb_id', 'full_name', 'full_name')
        .firstOrCreate(
        {
          username: res.id,
        },
        {
          username: res.id,
          password: Math.random().toString(36).slice(-8),
          full_name: res.name,
          picture_url: res.picture.data.url
        }
      )
      debug('user', user)
      return response.json(user)
    } catch (err) {
      return response.json({msg: 'Error!', errorIs: err}, 400)
    }
  })
}
