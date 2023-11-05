const express = require('express')

const { films} = require('./routes')

const PORT = 4000
const app = express()
app.use(express.json())



app.use('/api', films)

app.use((req, res, next) => {
    next({ statusCode: 404, error: new Error('path not found') })
})

app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

module.exports = app
app.listen(PORT, () => console.info(`> listening at http://localhost:${PORT}`))