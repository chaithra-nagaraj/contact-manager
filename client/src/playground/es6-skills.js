const person = {
    name: 'rakesh',
    skills: ['js', 'py', 'java'],
    // inside a method, the value of this will still refer to the current object

    // inside a method, if there is an arrow function, inside that function, value of this will still
    // be the current object

    details: function() {
        this.skills.forEach((skill) => {
            console.log(`${this.name} knowa ${skill}`)
        })
    },

  // inside a method, if there is a function, inside that function, value of this is the global
    // object not the current object
    profile: function(){
        function someFunction() {
            console.log(this.name)
        }
        someFunction()
        return this
    }
}
console.log(person.details())
console.log(person.profile())