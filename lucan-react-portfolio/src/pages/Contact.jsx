import React, { useState } from "react";

const Contact= ()=> {
    const [formState, setFormState]= useState({name: "", email: "", message: ""});

    const handleChange= (e)=> {
        const {name, value}= e.target;
        setFormState({...formState, [name]: value});
    };
    const handleSubmit= (e)=> {
        e.preventDefault();

    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formState.name} onChange={handleChange}/>
                {errors.name && <span> {errors.name}</span>}
            </label>
            <label>
                Email:
                <input type="text" name="email" value={formState.email} onChange={handleChange}/>
                {errors.email && <span> {errors.email}</span>}
            </label>
            <label>
                Message:
                <input type="text" name="message" value={formState.message} onChange={handleChange}/>
                {errors.message && <span> {errors.message}</span>}
            </label>
        </form>
    );
};

export default Contact;
