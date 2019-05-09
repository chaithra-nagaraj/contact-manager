import React from 'react' 

class NoteForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          title:'',
          body: '',
          tags: []
        }
        // bind methods, sets the context of the this keyword
       // this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    // es6 arrow function
    handleTitleChange = (e) => {
        const title = e.target.value 
        // console.log(this) 
        this.setState(() => ({ title }))
    }

    handleBodyChange = (e) => {
        const body = e.target.value 
        // console.log(this) 
        this.setState(() => ({ body }))
    }


    handleSubmit(e) {
        e.preventDefault() 
        const formData = {
            title: this.state.title
            
        }
        this.props.handleSubmit(formData)

        // clear form 

        this.setState(() => ({ 
           title:'',
           body: '',
           tags: ''
        }))
      
    }

    componentWillReceiveProps(nextProps) {
        const { title} = nextProps.note
        this.setState(() => ({
            title
        }))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title 
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} /> 
                    </label> <br/> 
                    <label>
                        Body
                        <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
                    </label>

                    <input type="submit" /> 
                </form> 
            </div>
        )
    }
}

export default NoteForm