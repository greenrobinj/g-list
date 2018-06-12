import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo}) => {
  <div className="row">
    { todos.map( todo => 
      <Todo
        key={todo.id}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo} 
        {...todo}
        />
      )
    }
  </div>
}

export default TodoList;