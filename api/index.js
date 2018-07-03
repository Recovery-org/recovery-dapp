const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const contract = require('./routes/contract')

users(app)
contract(app)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
