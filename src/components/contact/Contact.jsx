import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailIsSent, setEmailIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqmumen",
        "template_a6az78s",
        e.target,
        "Fs5RAxL0hrmlUtyvd"
      )
      .then(() => {
        setEmailIsSent(true);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        {emailIsSent ? (
          <h2 id="Contact__sent-message">
            Your Message was successfully sent!
          </h2>
        ) : (
          <form onSubmit={sendEmail}>
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="name"
                placeholder=" "
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="input-container">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                required
                
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-container">
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;