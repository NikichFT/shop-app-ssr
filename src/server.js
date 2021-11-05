const serialize = require('serialize-javascript');
const path = require('path')
const express = require('express')
const fs = require('fs')
const { renderToString } = require('@vue/server-renderer')
const manifest = require('../dist/server/ssr-manifest.json')

const server = express()

const appPath = path.join(__dirname, '../dist', 'server', manifest['app.js'])
const createApp = require(appPath).default

const clientDistPath = '../dist/client';
server.use('/img', express.static(path.join(__dirname, '../dist/client', 'img')))
server.use('/js', express.static(path.join(__dirname, '../dist/client', 'js')))
server.use('/css', express.static(path.join(__dirname, '../dist/client', 'css')))
server.use('/favicon.ico', express.static(path.join(__dirname, '../dist/client', 'favicon.ico')))

server.get('*', async (req, res) => {
    const { app, store } = await createApp(req)
  
    const appContent = await renderToString(app)

    const renderState = `
    <script>
      window.INITIAL_DATA = ${serialize(store.state)}
    </script>`;
  
    fs.readFile(path.join(__dirname, clientDistPath, 'index.html'), (err, html) => {
      if (err) {
        throw err
      }
  
      html = html
        .toString()
        .replace('<div id="app">', `<div id="app">${renderState}${appContent}`)
      res.setHeader('Content-Type', 'text/html')
      res.send(html)
    })
  })
  
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Сервер запущен по адресу: http://localhost:${port}`);
})