const express = require('express')

const { films} = require('./routes')

const PORT = 4000
const app = express()
app.use(express.json())


app.use('/films', films)


app.listen(PORT, () => console.info(`> listening at http://localhost:${PORT}`))