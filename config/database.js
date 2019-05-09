// const mongoose = require('mongoose')
// const CONNECTION_URI = process.env.MONGOLAB_URI || 'mongodb://chaithra:<chethu@7>@cluster0-shard-00-00-mv0bx.mongodb.net:27017,cluster0-shard-00-01-mv0bx.mongodb.net:27017,cluster0-shard-00-02-mv0bx.mongodb.net:27017/contacts?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

// const port = process.env.port || 3005
// mongoose.Promise= global.Promise
// mongoose.connect('CONNECTION_URI',{useNewUrlParser:true})
//     .then(function() {
//          console.log('connected to db')
//     })
//     .catch(function(err) {
//         console.log('OPPS !! somethig went wrong ')
//     })

//     module.exports = {
//         mongoose
//     }

    //DB Configuration
const mongoose = require('mongoose')



mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/contact-manager-jan',{useNewUrlParser:true})
    .then(function(){
        console.log('Connected to db')
    }) 
    .catch(function(){
        console.log('OOPS !!! Something went wrong in DB Connection')
    })

module.exports={
        mongoose
    }