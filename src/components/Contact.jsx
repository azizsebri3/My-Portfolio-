import React, { forwardRef, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import "../index.css";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [isAlertVisible, setAlertVisibility] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateId = 'sebri';
    const serviceId = 'react_contact_detail';
    const publicKey = '9ORn64-DyRR7CaH_p';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          setAlertVisibility(true);
          setTimeout(() => {
            setAlertVisibility(false);
          }, 3000);
        },
        (error) => {
          alert('problem');
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ paddingBottom: "100px" }}>
      <h1>Say Hello </h1>
      <form className='cf' ref={form} onSubmit={sendEmail}>
        <div className='half left cf'>
          <input type='text' placeholder='Name' name='user_name' />
          <input type='email' placeholder='Email address' name='user_email' />
        </div>
        <div ref={ref} className='half right cf'>
          <textarea name='message' type='text' placeholder='Message'></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>

        <Snackbar open={isAlertVisible} autoHideDuration={3000} >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '200px' }}
        >
          Sent
        </Alert>
      </Snackbar>
    </div>
  );
});

export default Contact;
