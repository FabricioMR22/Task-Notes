const express = require('express')
const morgan = require('morgan')
const app = express()

const taskRouter = require('./routes/task.routes')

app.use(morgan('dev'))
app.use(express.json())

app.use(taskRouter)
app.listen(4000)
console.log('server on port 4000')