'use strict'

const { get } = require('got')
const { send } = require('micro')
const generatePage = require('./lib/generate-page')

module.exports = async (request, response) => {
  const systems = (await get('https://systems.config.tfk.allthethings.win', {json: true})).body
  const data = await Promise.all(Object.keys(systems).map((itemKey) => get(systems[itemKey].url, {json: true})))
  const sites = data
    .map((response) => response.body)
    .map((site) => Object.assign(site, systems[site.systemid]))

  send(response, 200, generatePage(sites))
}
