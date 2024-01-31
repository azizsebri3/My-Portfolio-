import React, { forwardRef, useRef, useState, useEffect } from "react";
import { Tooltip, initTE } from "tw-elements";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import SplashScreen from "./SplashScreen";
import "../../input.css";

const Contact = forwardRef((props, ref) => {
  useEffect(() => {
    initTE({ Tooltip });
  }, []);
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

  return isLoading ? (
    <SplashScreen />
  ) : (
    <div ref={ref} className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[#00000000] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 style={{ color: "#EAA16E", fontSize: "40px" }}>
                    Contact Me 
                  </h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="relative mb-6">
                      <input
                        type="text"
                        className="peer block w-full rounded border-0 bg-transparent py-2 px-3 text-white outline-none transition-all duration-200 ease-linear"
                        name="user_name"
                      />
                      <label className="absolute top-[-0.5rem] left-3 mb-0 text-[#E69E6D] transition-all duration-200 ease-out">
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <input
                        type="email"
                        className="peer block w-full rounded border-0 bg-transparent py-2 px-3 text-white outline-none transition-all duration-200 ease-linear"
                        name="user_email"
                      />
                      <label className="absolute top-[-0.5rem] left-3 mb-0 text-[#E69E6D] transition-all duration-200 ease-out">
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <textarea
                        className="peer block w-full rounded border-0 bg-transparent py-2 px-3 text-white outline-none transition-all duration-200 ease-linear"
                        name="message"
                        rows="3"
                      ></textarea>
                      <label className="absolute top-[-0.5rem] left-3 mb-0 text-[#E69E6D] transition-all duration-200 ease-out">
                        Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block w-full rounded bg-[#EAA16E] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#E69E6D] transition duration-150 ease-in-out hover:bg-[#EAA16E] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_#EAA16E] focus:bg-[#EAA16E] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_#EAA16E] focus:outline-none focus:ring-0 active:bg-[#EAA16E] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_#EAA16E] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_#EAA16E,0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_#EAA16E,0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_#EAA16E,0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2679.918822721132!2d11.106280709955492!3d36.87369697717841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDUyJzI1LjUiTiAxMcKwMDYnMjkuNCJF!5e1!3m2!1sfr!2stn!4v1706130066030!5m2!1sfr!2stn"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Snackbar
        open={isAlertVisible}
        autoHideDuration={3000}
        onClose={() => setAlertVisibility(false)}
        {...((alertSeverity === "error" || alertSeverity === "warning") && {
          anchorOrigin: { vertical: "top", horizontal: "center" },
        })}
      >
        <Alert
          severity={alertSeverity}
          variant="filled"
          sx={{ width: "250px" }}
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
