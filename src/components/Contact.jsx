import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import SplashScreen from "./SplashScreen";
import "../index.css";

const Contact = forwardRef((props, ref) => {
  const form = useRef();
  const [isAlertVisible, setAlertVisibility] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");
    if (!userName || !userEmail || !message) {
      // Handle the case where the form is not filled out completely
      setAlertSeverity("error");
      setAlertVisibility(true);
      return;
    }
    setIsLoading(true);

    const templateId = "sebri";
    const serviceId = "react_contact_detail";
    const publicKey = "9ORn64-DyRR7CaH_p";

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          setAlertSeverity("success");
          setAlertVisibility(true);
        },
        (error) => {
          setAlertSeverity("warning");
          setAlertVisibility(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div style={{ paddingBottom: "100px" }}>
      <h1>Say Hello </h1>

      {isLoading ? (
        <SplashScreen />
      ) : (
        <form className="cf" ref={form} onSubmit={sendEmail}>
          <div className="half left cf">
            <input type="text" placeholder="Name" name="user_name" />
            <input type="email" placeholder="Email address" name="user_email" />
          </div>
          <div ref={ref} className="half right cf">
            <textarea
              name="message"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit" id="input-submit" />
        </form>
      )}

      <Snackbar
        open={isAlertVisible}
        autoHideDuration={3000}
        onClose={() => setAlertVisibility(false)}
        {...((alertSeverity === "error" || alertSeverity === "warning") 
             && { anchorOrigin: { vertical: 'top', horizontal: 'center'} })}
      >
        <Alert
          severity={alertSeverity}
          variant="filled"
          sx={{ width: "250px" ,  }}
        >
          {alertSeverity === "success"
            ? "Email sent successfully"
            : alertSeverity === "warning"
            ? "Error sending email"
            : "Please fill out all fields"}
        </Alert>
      </Snackbar>
    </div>
  );
});

export default Contact;
