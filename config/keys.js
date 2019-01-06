// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
    // return prod keys
    console.log('Production env ...')
    module.exports = require('./prod')
} else {
    // return dev keys
    module.exports = require('./dev')
}