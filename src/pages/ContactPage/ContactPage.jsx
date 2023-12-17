import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./ContactPage.css";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

function ContactPage() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztk8ac5",
        "template_bkorjj8",
        form.current,
        "DwHoc5cFKA7EhXydN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <>
      <Header />
      <div className="contactForm">
        <div className="ContactDetails">
          <div className="cont-container">
            <div className="con-section">
              <h3>Visit us</h3>
              <br />
              <p style={{ fontWeight: "bold" }}>
                Come and say Hello at our office HQ.
              </p>
              <p>
                #389, 1st Floor,
                <br />
                3rd Cross, 2nd Main, Aswath Nagar,
                <br />
                Marathahalli,Bangalore 560037
              </p>
              <br />
              <p style={{ fontWeight: "bold" }}>Our sub branch</p>
              <p>
                #404, Sai Vasanth Complex,
                <br /> Brila Compund,
                <br /> Near FlipKart [ Wall Mart], Kurnool
              </p>
            </div>
            <div className="con-section">
              <h3>Sales</h3>
              <p>Our friendly team is here to help.</p>
              <a href="mailto:ram@isignalresearch.com">
                ram@isignalresearch.com
              </a>
            </div>
            <div className="con-section">
              <h3>Call us</h3>
              <p>Mon-Fri from 9am-5pm</p>
              <a href="tel:+918187028445">(+91) 818-702-8445</a>
            </div>
            <div className="con-section">
              <h3>Social media</h3>
              <div className="socialCon">
                <a href="">
                  <BsLinkedin />
                </a>
                <a href="https://twitter.com/isignalresearch">
                  <BsTwitter />
                </a>
                <a href="https://www.youtube.com/channel/UCniUAbWz6YT2XEeCSBhVoCQ">
                  <BsYoutube />
                </a>
                <a href="https://chat.whatsapp.com/BkqZKlRKbPP0TfLFYVpCu8">
                  <BsWhatsapp />
                </a>
                <a href="https://www.facebook.com/isignalofficial">
                  <BsFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={sendEmail}>
            <div className="name">
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="text"
              name="companyname"
              placeholder="Company name"
              required
            />
            <input
              type="from_email"
              name="companyemail"
              placeholder="you@company.com"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="(+91) 123-456-7890"
              required
            />
            <textarea
              name="message"
              placeholder="Message...."
              cols="30"
              rows="10"
              style={{ fontSize: "1.1rem" }}
            ></textarea>
            <button type="submit" className="Sentbtn">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
