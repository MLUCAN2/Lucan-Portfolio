// Using Formspree to send email to personal account
import React from 'react';
import {useForm, ValidationError} from '@formspree/react'

const Contact = () => {
    const [state, handleSubmit] = useForm("xgegbjpv");
  
    if (state.succeeded) {
      return <p>Thanks for your message! I should get back to you within 48 hours.</p>;
    }
  
    return (
      <section className='contact-page'>
        <div className= 'contact-me'>
        <form onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" required/>
          <ValidationError prefix="Name" field="name" errors={state.errors}/>
          
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required/>
          <ValidationError prefix="Email" field="email" errors={state.errors}/>
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required/>
          <ValidationError prefix="Message"field="message" errors={state.errors}/>
          
          <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
        </div>
      </section>
    );
  };
  
export default Contact;
