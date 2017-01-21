'use strict'
const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { get } = require('got')
const { send } = require('micro')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const { pathname } = await parse(request.url, true)
  const systems = (await get('https://systems.config.tfk.allthethings.win', {json: true})).body
  const data = await Promise.all(Object.keys(systems).map((itemKey) => get(systems[itemKey].url, {json: true})))
  const results = data
    .map((response) => response.body)
    .map((site) => Object.assign(site, systems[site.systemid]))
    .map((site) => Object.assign({name: site.name, status: site.queue || 0}))

  if (pathname === '/json') {
    send(response, 200, results)
  } else if (pathname === '/html') {
    send(response, 200, renderPage(results))
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
