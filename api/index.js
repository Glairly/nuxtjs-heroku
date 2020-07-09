const express = require('express')

// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)

app.get('/', (req, res) => {
    res.json({
        hello: "world"
    })
})

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
}