import Syncano from 'syncano-client'

const syncano = new Syncano('purple-cherry-5235')
const token = window.localStorage.getItem('token')
syncano.setToken(token)

export default {
	auth: {
		login: ({code}) => syncano.get('auth/fbgetaccesstoken', {code})
	},
	geolocation: {
		saveMyPosition: ({position: {latitude, longitude}}) => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.post('users/savemyposition', {
				position: {
					latitude,
					longitude
				}
			})
		}
	},
	user: {
		getProfile: () => syncano.get('users/getmyprofile'),
		find: ({id}) => syncano.get('users/find', {id})
	},
	proximity: {
		getNearesUserLocations: () => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.get('proximity/getnearestuserlocations')
		}
	},
	highFives: {
		initialize: ({to_user}) => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.get('highfives/initialize', {to_user})
		},
		confirm: (data) => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.post('highfives/confirm', data)
		},
		getAll: () => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.get('highfives/getAllHighFives')
		},
		getMy: () => {
			const token = window.localStorage.getItem('token')
			syncano.setToken(token)

			return syncano.get('highfives/getMyHighFives')
		},
	}
}
