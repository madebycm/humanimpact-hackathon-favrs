import Syncano from 'syncano-server'
import FormData from 'form-data'

export default (ctx) => {
  const {data, response} = Syncano(ctx)

  // if(!ctx.meta.user){
  // 	response.json({error: "No user found"}, 403);
  // 	return;
  // }

  if (ctx.args.photo) {
    const form = new FormData()
    form.append('photo', ctx.args.photo, {
      filename: ctx.args.filename,
      filetype: ctx.args.filetype
    })

    data.highfives.update(ctx.args.id, form)
    .then(r => {
      // upload here
      response.json({status: "OK", response: r});
    })
    .catch(e => console.log("Fucked up", e))
  }
}
