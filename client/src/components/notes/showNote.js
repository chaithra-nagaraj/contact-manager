import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NoteShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {}
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const confirmDelete = window.confirm("Are you sure?")
        if(confirmDelete) {
            // api call to delete
            axios.delete(`http://localhost:3005/notes/${this.state.note._id}`)
                .then(() => this.props.history.push('/notes'))
                .catch(err => window.alert(err))
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3005/notes/${id}`)
            .then(response => this.setState(() => ({ note: response.data})))
    }

    render() {
        return (
            <div>
                <h2> {this.state.note.title} </h2>
                <p> Title - { this.state.note.title } </p>
                <p> Body - { this.state.note.body } </p>

                <Link to={`/notes/edit/${this.state.note._id}`}> edit</Link>
                <button onClick={this.handleDelete}>
                    delete
                </button> <br/>
                <Link to='/notes'> Back</Link>
            </div>
        )
    }

}

export default NoteShow