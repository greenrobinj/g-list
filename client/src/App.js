import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends Component {
  state = {todos:[]}
  
  componentDidMount() {
    //make  a call ro rails server
  }

  addStuff = (name) => {

  }

  updateTodo = (id) => {

  }

  deleteTodo = (id) => {

  }

  render() {
    return (
      <div className="container">
      <TodoForm addStuff= {this.addStuff}/>
      <TodoList
        todos={this.state.todos}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}

export default App;
