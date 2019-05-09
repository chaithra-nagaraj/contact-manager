const express = require('express')
//npm install --save mongoose
const {mongoose} = require('./config/database')
const { contactRouter} = require('./app/controllers/ContactsController')
const { noteRouter} = require('./app/controllers/NotesControllers')
const {usersRouter}=  require('./app/controllers/UsersController')
const cors = require('cors')
const port = 3005
const app = express()

app.use(express.json())  
app.use(cors())        //allow express to parse data
app.use('/contacts', contactRouter)
app.use('/notes',noteRouter)
app.use('/users',usersRouter)
app.listen(port , function() {
    console.log('listening to the port' , port)
})





