'use strict'

module.exports = (sites) => {
  const queues = sites
                  .map((site) => `<div style="font-size: 3em">${site.name}: ${site.queue || 0}</div>`)

  return `<html><body><h1 style="font-size: 3em">Kø</h1>${queues.join('')}</body></html>`
}
