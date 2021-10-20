/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const path = require('path')
const { startDevServer } = require('@cypress/webpack-dev-server')
const tryLoadWebpackConfig = require('@cypress/react/plugins/utils/tryLoadWebpackConfig')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const webpackConfig = tryLoadWebpackConfig(
    path.resolve(config.projectRoot, 'infra/webpack.config.js')
  )
  on('dev-server:start', async (options) => {
    return startDevServer({
      options,
      webpackConfig,
      template: path.resolve(__dirname, 'index.html'),
    })
  })

  config.env.reactDevtools = true
}
