const mongoose = require('mongoose')

const Schema = mongoose.Schema
const contactSchema = new Schema({
    name : {
        type : String ,
        required : true
    },
    email: {
        type : String
    },
    mobile : {
        type: Number ,
        required : true ,
        minlength : 10 ,
        maxlength : 10
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


//We need to create a model after creating schema.
//Contact is the object constructor function.(this has got many methods).
const Contact = mongoose.model('Contact' , contactSchema)

module.exports = {
    Contact
}