const express = require('express')
const helmet = require('helmet')
const cohortsRouter = require('./routers/index')

const server = express()
const port = process.env.PORT || 5000;

server.use(helmet())
server.use(express.json())
server.use('/api/cohorts', cohortsRouter)

server.listen(port, () => {
     console.log(`\n** API running on http://localhost:${port} **\n`)
})