import React, { Fragment, useState } from 'react';

// mt-5 means margin-top = 5
const InputTodo = () => {

    const [description, setDescription] = useState('');
    // the form submitting function
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = '/';
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <Fragment>
            <h1 className='text-center mt-5'>Input your To do</h1>
            <form className='d-flex mt-3' onSubmit={onSubmitForm}> 
                <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}
export default InputTodo;
