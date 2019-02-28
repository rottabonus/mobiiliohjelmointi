import React from 'react';
import './App.css';


const TodoTable = ({ todos, removeTodo }) => {

        const sortedList = [...todos].sort((a, b) => a.date.localeCompare(b.date))

        return(
        <div className="TodoTable">
        <table>
        <tbody>
        <tr><th>Description</th><th>Date</th></tr>
            {sortedList.map((todo, index) =>
                <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.date}</td>
                <td><button onClick={(event) => removeTodo(index)} key={todo}>Delete</button></td></tr>
)}
</tbody>
</table>
</div>
);
}
export default TodoTable;
