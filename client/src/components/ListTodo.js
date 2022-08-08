import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

const ListTodo = () =>{
    //this is for getting all the todos
    const [todos, setTodos] = useState([]);

    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5000/todos')
            const Data = await response.json();
            setTodos(Data);
        } catch (err) {
            console.error(err.message);
        }
    }
    // this is for deleting a todo
    const deleteTodo = async(id) =>{
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method:"DELETE",
            });
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.log(err.message)
        }
    }



    useEffect(() => {
       getTodos();
    }, []);
    return (
        <Fragment>
            <h1 className="mt-3">To do List</h1>
            <table className="table table-striped">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo = {todo}/></td>
            <td><button className="btn btn-danger" onClick={()=>{deleteTodo(todo.todo_id)}}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  
        </Fragment>
    );
}
export default ListTodo;