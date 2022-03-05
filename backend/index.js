const connectToMongo = require('./db')
const express = require('express')

connectToMongo()
const app = express()
const port = 3000

//When we want to use req.body then we need to use the middleware, so here the middleware is expressjs
app.use(express.json())

//Available Routes
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})