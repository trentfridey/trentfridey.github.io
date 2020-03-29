import React from 'react';

const Contact = () => (
    <>
    <hr/>
    <form name="contact" method="post">
    <input type="hidden" name="form-name" value="contact" />
        <fieldset>
            <legend>
                Contact Me
            </legend>
            <label htmlFor="name">Name
            <input type='text' name="name" placeholder="name"/>
            </label>
            <label htmlFor="name">Email
            <input type="email" name="email" placeholder="email"/>
            </label>
            <textarea cols="80" rows="5" type="text" name="message" placeholder="message"/>
            <button type="submit">Let's Get in Touch!</button>
        </fieldset>
    </form>
    </>
);

export default Contact;