import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos,{description: this.state.description, date: this.state.date}]
    });
  }
  
  removeTodo(index){
      this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
          
      }); 
      
                    }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
        Description:
            <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/> 
        Date:  
        <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
          </form>
        </div>
        
        
        <div>
        <table>
        <tbody>
        <tr><th>Date</th><th>Description</th></tr>
            {this.state.todos.map((todo, index) =>
                <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick={(event) => this.removeTodo(index)} key={todo}>Delete</button></td></tr>
)}
</tbody>
</table>
</div>
</div>

);

  }
}

export default App;

