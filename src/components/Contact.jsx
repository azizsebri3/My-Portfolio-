import React, { forwardRef, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SplashScreen from "./SplashScreen"
import "../index.css";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [isAlertVisible, setAlertVisibility] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [isLoading, setIsLoading] = useState(false);  // Add this line

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);  // Set loading to true when starting email sending

    const templateId = 'sebri';
    const serviceId = 'react_contact_detail';
    const publicKey = '9ORn64-DyRR7CaH_p';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          setAlertSeverity('success');
          setAlertVisibility(true);
        },
        (error) => {
          setAlertSeverity('error');
          setAlertVisibility(true);
        }
      )
      .finally(() => {
        setIsLoading(false);  // Set loading to false when email sending is complete
      });
  };

  // Rest of the code...

  return (
    <div style={{ paddingBottom: "100px" }}>
      <h1>Say Hello </h1>
      
      {isLoading ? (  
        <SplashScreen />
      ) : (
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
      )}

      <Snackbar open={isAlertVisible} autoHideDuration={3000} onClose={() => setAlertVisibility(false)} >
      <Alert
            severity={alertSeverity}
            variant="filled"
            sx={{width: '200px'}}
          >
            {alertSeverity === 'success' ? 'Email sent successfully' : 'Error sending email'}
          </Alert>
      </Snackbar>
    </div>
  );
});

export default Contact;
