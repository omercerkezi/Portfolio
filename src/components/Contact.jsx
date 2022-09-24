import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../syles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const notify = () => {
    toast.success("Email sent successfully", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7sxp4rm",
        "template_89chl6f",
        form.current,
        "vraVXmBDQUkvmRrwG"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setDetails({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <p>Submit the form below</p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="name-class">
          <input
            className="name"
            type="text"
            name="user_name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            autoComplete="off"
            required
          />
          <label className="label-name">
            <span className="content-name">Name</span>
          </label>
        </div>
        <div className="name-class">
          <input
            type="email"
            name="user_email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            autoComplete="off"
            required
          />
          <label className="label-name">
            <span className="content-name">Email</span>
          </label>
        </div>
        <div className="message-class">
          <textarea
            name="message"
            placeholder="Message"
            rows={10}
            onChange={(e) =>
              setDetails({ ...details, message: e.target.value })
            }
            value={details.message}
            required
          />
        </div>
        <input className="submitButton" type="submit" value="Send" required />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
