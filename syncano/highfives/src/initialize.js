import Syncano from 'syncano-server'

export default (ctx) => {
  const {data, response} = Syncano(ctx)
  const {to_user, status} = ctx.args

  if(!ctx.meta.user) return response.json({error: "No user found in context magic syncano meta stuff", user: false});

  data.highfives.create({
    from_user: ctx.meta.user.id,
    to_user,
    status: 'initialized',
  })
  .then(highfive => {
    response.json(highfive)
  })
}