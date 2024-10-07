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
    const userName = formData.get("name");
    const userEmail = formData.get("email");
    const message = formData.get("message");

    if (!userName || !userEmail || !message) {
      setAlertSeverity("error");
      setAlertVisibility(true);
      return;
    }

    setIsLoading(true);

    const templateId = "sebri";
    const serviceId = "service_m0szh0k";
    const publicKey = "xO8SYnjIz8LWfdGRO";

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
      <section className="body-font relative">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="text-5xl text-[#EAA16E] text-center pb-20 pt-40 ">
              Contact <span className="text-white">Me</span>
            </h1>
            <p className="mx-auto text-xl text-white leading-relaxed lg:w-2/3">
              Feel free to reach out to us! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="-m-2 flex flex-wrap"
            >
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#eaa16e] focus:bg-gray-900 focus:ring-2 focus:ring-[#eaa16e]"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#eaa16e] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#eaa16e]"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#eaa16e] focus:bg-gray-900 focus:ring-2 focus:ring-[#eaa16e]"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#eaa16e] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#eaa16e]"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#eaa16e] focus:bg-gray-900 focus:ring-2 focus:ring-[#eaa16e]"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label
                    ref={ref}
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#eaa16e] transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#eaa16e]"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  type="submit"
                  className="mx-auto flex rounded border-0 bg-[#eaa16e] py-2 px-8 text-lg text-white hover:bg-[#d78a53] focus:outline-none"
                >
                  Send
                </button>
              </div>
            </form>
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
