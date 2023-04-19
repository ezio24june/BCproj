const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var cors = require('cors')
const server = require('./backend/Controller/user')
const app = express()
const config = require('./backend/Config/db_config')
const dbUrl = "mongodb://ezio24june:gdpRg3omUONo8Tme@ac-gp74mvh-shard-00-00.jqeofdj.mongodb.net:27017,ac-gp74mvh-shard-00-01.jqeofdj.mongodb.net:27017,ac-gp74mvh-shard-00-02.jqeofdj.mongodb.net:27017/?ssl=true&replicaSet=atlas-w90r51-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose
  .connect(
    dbUrl, connectionParams
  )
  .then(() => {console.info('MongoDB Connected')})
  .catch((err) => console.log("LOL"+err))
var port = process.env.PORT || 3001

app.use('/', server)



app.listen(port)
console.log('App is running on port ' + port)
