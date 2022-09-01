export default function Head(req={}) {
  const { path } = req
  const title = `ToDo MVC — ${path}`
  return `
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <link rel="stylesheet" href="/_static/index.css">
        <link rel="icon" href="/_static/favicon.svg">
      </head>
    `
}
