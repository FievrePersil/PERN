import React, { Fragment, useState } from "react";

// the modal is a button created by bootstrap that diplays an alert window on clicking
const EditTodo = ({ todo }) =>{
    //the function for updating a todo
    const ChangeTodo = async(e) =>{
        e.preventDefault();
        try {
        const des = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(des)
        });
        window.location = '/';
        } catch (err) {
            console.error(err.message);
        }
    } 
    const [description, setDescription] = useState(todo.description);
    return (
        <Fragment>
        
            <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>

<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit To do</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>&times;</button>
      </div>
      <div class="modal-body">


        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => ChangeTodo(e)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    );
}
export default EditTodo;