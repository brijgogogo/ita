/* global process */
const TARGET = process.env.npm_lifecycle_event

//console.log(process.env.HOST)
//console.log(process.env.PORT)

const config = {
  isDevEnv: TARGET === 'start' || !TARGET,
  isBuild: TARGET === 'build',
  host: process.env.HOST,
  port: process.env.PORT
}

module.exports = config
