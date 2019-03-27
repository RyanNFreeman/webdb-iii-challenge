const express = require('express')
const helmet = require('helmet')
const cohortsRouter = require('./routers/cohorts')
const studentsRouter = require('./routers/students')


const server = express()
const port = process.env.PORT || 5000;

server.use(helmet())
server.use(express.json())

server.use('/api/cohorts', cohortsRouter)
server.use('/api/students', studentsRouter)


server.listen(port, () => {
     console.log(`\n** API running on http://localhost:${port} **\n`)
})