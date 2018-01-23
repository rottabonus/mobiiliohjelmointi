import React, { Component } from 'react';
import './App.css';

class TodoTable extends Component {
    constructor(props) {
        super(props);
    }
  
    
    render(){
        return(
        <div className="TodoTable">
        <table>
        <tbody>
        <tr><th>Description</th><th>Date</th></tr>
            {this.props.todos.map((todo, index) =>
                <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick={(event) => this.props.removeTodo(index)} key={todo}>Delete</button></td></tr>
)}
</tbody>
</table>
</div>


);
    }
}
export default TodoTable;