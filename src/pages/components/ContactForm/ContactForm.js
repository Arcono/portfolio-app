import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    render(){
        return(
            <div className='theme-wrapper'>
                <div>
                    <div>
                        <h1> Contact Me</h1>
                    </div>
                </div>
                <div className='contact-form-wrapper'>
                    <form className='contact-form'>
                        <div className='top-wrapper'>
                            <div className='name-wrapper'>
                                <label className='cf-label'>Your Name:</label>
                                <input className='cf-input'></input>
                            </div>
                            <div className='email-wrapper'>
                                <label className='cf-label'>Your Email:</label>
                                <input className='cf-input'></input>
                            </div>
                        </div>
                        <div className='bottom-wrapper'>
                            <label className='cf-label'>Message:</label>
                            <textarea className='cf-message-input'></textarea>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default ContactForm;