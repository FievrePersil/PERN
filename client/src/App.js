import './App.css';
import React, { Fragment } from 'react';


//componnents
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';



function App() {
  return (
    <div className="App">
      <Fragment>
         <div className='container'>
         <InputTodo />
         <ListTodo />
         </div>
      </Fragment>
    </div>
  );
}

export default App;
