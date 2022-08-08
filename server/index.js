const express = require ('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());   //req.body

//routes

//create a todo
app.post("/todos", async(req, res)=>{
    try {
        const {description} = req.body;
        const newTodo = await pool.query("insert into todo (description) values ($1) returning *;", [description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message)
    }
});


//get all todos

app.get("/todos", async(req, res)=>{
    try {
        const allTodos = await pool.query("select * from todo;");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//get a todo
app.get("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const speTodo = await pool.query("select * from todo where todo_id = $1;", [id]);
        res.json(speTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update a todo
app.put("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("update todo set description = $1 where todo_id = $2;",[description, id]);
        res.json("todo was updated")
    } catch (err) {
        console.error(err.message)
    }
})

//delete a todo
app.delete("/todos/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("delete from todo where todo_id = $1;",[id]);
        res.json("todo was deleted")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000, ()=>{
    console.log('running on port 5000!');
});