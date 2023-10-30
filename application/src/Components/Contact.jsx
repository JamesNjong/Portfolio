import React, { Component, useEffect, useRef } from "react";
import github from "../AppUtilz/Iconography/socials/Github.svg";
import linkedin from "../AppUtilz/Iconography/socials/LinkedIN.svg";
import whatsapp from "../AppUtilz/Iconography/socials/WhatsApp.svg";
import outlook from "../AppUtilz/Iconography/socials/Outlook.svg";
import twitter from "../AppUtilz/Iconography/socials/Twitter.svg";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let section = "Contact";
  let heading = "Always a hello away !";
  let formStatus = false;

  const toastject = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const form = useRef();

  useEffect(() => {
    if (formStatus) {
      form.current?.reset();
    }
  }, [formStatus]);

  const notify = (message, type) => {
    if (type === 1) {
      toast.info(message, toastject);
    } else if (type === 2) {
      toast.success(message, toastject);
    } else {
      toast.error(message, toastject);
    }
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formStatus) {
      notify(
        "Cannot send message. Please check that you have entered a valid e-mail",
        0
      );
      return;
    } else {
      notify("Sending email. . .", 1);
    }

    emailjs
      .sendForm(
        "service_5yia5be",
        "template_9mbwqw3",
        form.current,
        "GAtW9o8lVSVD18WwK"
      )
      .then(
        (result) => {
          form.current?.reset();
          notify("Your email has been sent", 2);
        },
        (error) => {
          notify(
            "Error sending your email. Please check your internet connection.",
            0
          );
        }
      );
  };

  const handleChange = (e) => {
    if (isValidEmail(e.target.value)) {
      formStatus = true;
    } else {
      formStatus = false;
    }
  };

  return (
    <section className="contact-page" id="contact">
      <div className="bucket">
        <div className="contact-content-container">
          <div className="ccc-left">
            <p
              className="section-lable tx-primary 
            font-text-bold size-h4"
            >
              Let's get you{" "}
            </p>
            <h3 className="tx-light size-h2 font-text-bold tx-ag">
              to that audacious goal !
            </h3>
          </div>
          <div className="ccc-right">
            <div className="form-holder bg-dark">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="grey-area bg-primary-dark">
                  <div className="form-factory">
                    <h3 className="font-text-bold tx-primary size-extra">
                      Get in touch
                    </h3>
                  </div>
                  <div className="form-elements">
                    <label
                      for="from_name "
                      className="font-text-medium tx-light size-h5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-primary-light  font-link-bold tx-light "
                      id="from_name"
                      name="from_name"
                      placeholder="e.g John Minang"
                      required
                    />

                    <label
                      for="from_email"
                      className="font-text-medium tx-light size-h5"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="from_email"
                      name="from_email"
                      className="bg-primary-light font-link-bold tx-light"
                      placeholder="e.g jminang@gmail.com"
                      required
                      onChange={handleChange}
                    />
                    <label
                      for="message"
                      className=" font-text-medium tx-light size-h5"
                    >
                      Message
                    </label>
                    <textarea
                      id="msg-boot"
                      className="message-boot font-link-bold tx-light bg-primary-light "
                      name="message"
                      rows="8"
                      placeholder="Hey James. We have been looking for you . . ."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="cf-button_row">
                  <button
                    type="submit"
                    class="btn-send font-link-bold size-h5 tx-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="contact_socials ">
              <span className="tx-light font-text-bold size-h5">
                Connect on
              </span>
              <a href="https://github.com/JamesNjong/" target="_blank">
                {" "}
                <img
                  src={github}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2 "
                />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/james-jr-njong/"
                target="_blank"
              >
                {" "}
                <img
                  src={linkedin}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2 "
                />{" "}
              </a>

              <a href="mailto:njongjames@outlook.com" target="_blank">
                {" "}
                <img
                  src={outlook}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
              <a
                aria-label="Chat on WhatsApp"
                href="https://wa.me/+237674811226"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src={whatsapp}
                  width="30"
                  alt=""
                  className="img-fluid social_icon m-2"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
};

export default Contact;
