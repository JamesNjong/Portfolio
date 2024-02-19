import React, { Component, useEffect, useRef } from 'react';

import github from "../../assets/images/Github.svg";
import linkedin from "../../assets/images/LinkedIN.svg";
import whatsapp from "../../assets/images/WhatsApp.svg";
import outlook from "../../assets/images/Outlook.svg";
import twitter from "../../assets/images/Twitter.svg";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AnimationEffect from ".././supports/AnimationEffect";

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
    <div className="contactus">
        <section className="contact-page" id="contact">
      <div className="bucket">
        <div className="contact-content-container">
          <div className="ccc-left ">
            <AnimationEffect delay={0.4}>
               
              <h3 className="text-2xl md:text-7xl tx-light font-extrabold">
              Let's get you to that audacious goal !
              </h3>
            </AnimationEffect>
          </div>
          <div className="ccc-right">
            <div className="form-holder bg-dark">
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="grey-area bg-primary-dark">
                  <div className="form-factory">
                    <h3 className="font-extrabold tx-primary text-4xl py-4">
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
                      className="bg-primary-light  font-regular tx-light "
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
                      className="message-boot font-regular tx-light bg-primary-light"
                      name="message"
                      rows="8"
                      placeholder="Hey James. We have been looking for you . . ."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="cf-button_row btn-send">
                  <button
                    type="submit"
                    class="button-tetiary font-regular size-h5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
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
    </div>
  );
};

export default Contact;