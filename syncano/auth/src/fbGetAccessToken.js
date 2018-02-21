import axios from 'axios'
import Syncano from 'syncano-server'

export default (ctx) => {
  const {users, response, logger, socket} = Syncano(ctx)
  const {debug} = logger('hello script')

  const code = ctx.args.code
  
  const redirectUri = ctx.meta.request.HTTP_REFERER + "auth";
  const getAccessTokenUrl = 'https://graph.facebook.com/oauth/access_token?client_id=1747104338635842&redirect_uri='+redirectUri+'fbgetaccesstoken/&client_secret=eb73ff8ffa009d8881bc96894477e347&code=';

  axios.get(getAccessTokenUrl+code).then(r => {
  	debug("got code!", r.data.access_token);
  	socket.get('auth/fblogin/?access_token='+r.data.access_token).then(user => {
  		response.json(user)
  	})
  	.catch(e => console.log(e));
  	//return r.data.access_token;
  }).catch(e => console.log("axios fu", e));

}
