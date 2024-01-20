import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./Careerpages.css";
import { AiFillPhone } from "react-icons/ai";
import image from "../../assets/images/contactimg.svg";

function CareerPages() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mi45bni",
        "",
        form.current,
        ""
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
    <div id="careerPages">
      <Header />
      <div className="formContainer">
        <div className="contactDetails">
          <div className="heading">
            <AiFillPhone />
            Contact Us
          </div>
          <p>
            <span style={{ fontWeight: "bold" }}>Call : </span>{" "}
            <a href="tel:+918187028445">+91 818-702-8445</a>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Email : </span>{" "}
            <a href="mailto:careers@isignalresearch.com">
              careers@isignalresearch.com
            </a>
          </p>
          <img src={image} alt="" />
        </div>
        <div className="conForm">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input
              type="email"
              name="from_email"
              placeholder="you@company.com"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              required
            />
            <input
              type="text"
              name="job_role"
              placeholder="Position applying for..."
              required
            />
            <input
              type="text"
              name="resume"
              id="resume"
              placeholder="Resumé link"
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              cols={30}
              rows={10}
            />
            <button type="submit" className="Submitbtn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerPages;
