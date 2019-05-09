
const express = require('express')
const router = express.Router()
const {Contact} = require('../models/Contact')
const { authenticateUser} = require('../middlewares/authentication')

//Client is making request - we are wriing DB query
router.get('/' , authenticateUser, function(req,res) {
    Contact.find({ user:  req.user._id})       
                         
        .then(function(contacts) {
            res.send(contacts)
        })
        .catch(function(err) {
            res.send(err)
    })
    
})

//Route handler to create new contact / document 
router.post('/' , authenticateUser, function(req,res) {
    const body = req.body 
    // new object 'conatct' of type 'Contact' - automatically maps the properties of the body to the Contact blueprint
    const contact = new Contact(body) 
    contact.user = req.user._id
    contact.save()       //It will update into database also all validations will be checked here 
        .then(function(contact) {
            res.send(contact)
        })
        .catch(function(err) {
            res.send(err)
        })
})

//To get only one document/ object from the collection/array
//
//here collectuion = Contact
//here document = new new contacts which we will create
//
router.get('/:id', authenticateUser, function(req,res) {
    const id = req.params.id
    Contact.findOne({
        user: req.user._id,
        _id: id
    })
        .then(function(contact) {       
            res.send(contact)       //it will send the particular document with the ID found
        })
        .catch(function(err) {
            res.send(err)
        })
})


//To delete only one documnet /object 
router.delete('/:id', authenticateUser, function(req,res){
    const id = req.params.id
    Contact.findOneAndDelete({
        user: req.user._id,
        _id: id
    })
        .then(function(contact) {
            res.send(contact)
            // if(contact){
            //     res.send(contact)
            // }else {
            //     res.send({})
            // }
        })
        .catch(function(err) {
            res.send(err)
        })
})

// to update one record/document/object
router.put('/:id' , authenticateUser, function(req,res) {
    const id = req.params.id
    const body = req.body 
    Contact.findOneAndUpdate({
        user: req.user._id,
        _id: id
    }
        , {$set : body} , {new: true , runValidators : true})
        .then(function(contact) {
            res.send(contact)
        })
        .catch(function(err) {
            res.send(err)
        })
})

module.exports = {
    contactRouter : router
}