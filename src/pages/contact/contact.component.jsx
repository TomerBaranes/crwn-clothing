import React, { useState } from "react";
import emailjs from "emailjs-com";

import CustomButton from "../../components/custom-button/custom-button.component";
import { GeoAltFill, Phone, Envelope } from "react-bootstrap-icons";

import "./contact.styles.scss";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const contactHandler = (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        event.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          Swal.fire(
            "Great!",
            "Thank you for contacting me, I'll try to get back to you as soon as possible!",
            "success"
          );
          console.log(result.text);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>CONTACT US</h2>
        <p>
          Hi yes be sure to yes contact yes we will get in touch yes 100% true
          no lie
        </p>
      </div>
      <div className="container">
        <div className="contact-info">
          <div className="box">
            <div className="icon">
              <GeoAltFill />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>HADERA ISRAEL</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <Phone />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+972-506666059</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <Envelope />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>tomerfullstack@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={contactHandler}>
            <h2>Send Message</h2>
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <span>Full Name</span>
            </div>
            <div className="input-box">
              <input
                className={email ? "email-exists" : ""}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
            </div>
            <div className="input-box">
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                required
              />
              <span>Type Your Message...</span>
            </div>
            <div className="input-box">
              <CustomButton type="submit">SEND</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
