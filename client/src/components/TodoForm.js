import React from 'react'

class TodoForm extends React.Component {
  state = {name: ''}
    
    handleChange =(e) => {
      this.setState({ name: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addStuff(this.state.name);
      this.setState({ name: ''})
    }

    render(){
      return(
        <form onSubmit={this.handleSubmit}>
        <input 
          placeholder= "Add some Stuff"
          required
          value={this.state.name}
          onChange={this.handleChange} />
        </form>
      )
    }
  }


export default TodoForm;