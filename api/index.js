const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
// const contract = require('./routes/contract')

// Import API Routes
app.use('/', users)
// app.use('/contract', contract)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
