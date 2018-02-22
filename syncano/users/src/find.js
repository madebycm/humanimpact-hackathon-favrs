import Syncano from 'syncano-server'

export default async (ctx) => {
  const {users, response} = Syncano(ctx)
  const allUsers = await users.list()
  const user = allUsers.find(user => user.id === parseInt(ctx.args.id))

  if(user){
  	response.json(user)
  }
  else response.json({whatisgoing: "Just syncano stuff (but probably wrong id)"})

}
