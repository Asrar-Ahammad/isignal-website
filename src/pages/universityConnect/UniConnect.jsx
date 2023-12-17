import "../universityConnect/connect.css";
import emailjs from "@emailjs/browser";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import UniLogo from "../../assets/images/university-connect.svg";
import { useRef } from "react";

function UniConnect() {
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
      <div className="connect-heading">
        <h1 className="connect-heading-style">
          <span style={{ color: "#C10000" }}>i</span>Signal<sup>®</sup>{" "}
          University Connect
        </h1>
      </div>

      <div className="connectForm">
        <div className="connect-form">
          <form onClick={sendEmail}>
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
              name="designation"
              placeholder="Designation"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="someone@example.com"
              required
            />
            <input
              type="text"
              name="collegename"
              placeholder="College name"
              required
            />
            <input
              type="text"
              name="collegeaddress"
              placeholder="College address"
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
            <button type="submit" className="Sentbtn">
              Submit
            </button>
          </form>
        </div>

        <div className="connect-image">
          <img src={UniLogo} alt="university-logo" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UniConnect;
