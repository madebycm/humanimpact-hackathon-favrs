import Syncano from 'syncano-server'
import FormData from 'form-data'

export default (ctx) => {
  const {data, response} = Syncano(ctx)

  if (ctx.args.photo) {
    const form = new FormData()
    form.append('photo', ctx.args.photo, {
      filename: ctx.args.filename,
      filetype: ctx.args.filetype
    })
    form.append('status', 'confirmed')

    data.highfives.update(ctx.args.id, form)
    .then(r => {
      response.json(r);
    })
    .catch(e => console.log("Fucked up", e))
  }
}
