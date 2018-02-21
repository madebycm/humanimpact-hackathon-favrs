import Syncano from 'syncano-client'

const syncano = new Syncano('purple-cherry-5235')
syncano.setToken(window.localStorage.getItem('token'))

export default {
	auth: {
		login: ({code}) => syncano.get('auth/fbgetaccesstoken', {code})
	}
}
