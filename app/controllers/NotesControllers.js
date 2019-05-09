
const express = require('express')
const router = express.Router()
const {Note} = require('../models/note')

// note collection 
router.get('/' , function(req,res) {
    Note.find()
        .then(function(notes) {
            res.send(notes)
        })
        .catch(function(err) {
            res.send(err)
        })
})


router.get('/:id',function(req,res) {
    const id = req.params.id
    Note.findById(id)          //it will return a promise ,
        .then(function(note) {       
            res.send(note)       //it will send the particular document with the ID found
        })
        .catch(function(err) {
            res.send(err)
        })
})
// add a new note
router.post('/' , function(req,res) {
    const body = req.body
    const note = new Note(body)
    note.save()
        .then(function(note) {
            res.send(note)
        })
        .catch(function(err) {
            res.send(err)
        })
})


//to update a note 
router.put('/:id', function(req,res) {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, {$set : body} , {runValidators : true , new : true})
        .then(function(note) {
            res.send(note)
        })
        .catch(function(err) {
            res.send(err)
        })

})


//to delete a note 
router.delete('/:id' , function(req,res) {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then(function(note) {
            res.send(note)
        })
        .catch(function(err) {
            res.send(err)
        })
    
})

module.exports = {
    noteRouter : router
}