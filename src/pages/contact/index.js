import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import './contact-page.scss';

class Contact extends Component {

    submit = (values) => {
        console.log("TCL: Contact -> submit -> values", values)
        return;
    }

    render() {
        return (
            <div className='contact-page-container'>
                <h1>Welcome to contact</h1>
                <ContactForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default Contact;