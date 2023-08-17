import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './Careerpages.css'
import { AiFillPhone } from "react-icons/ai";
import image from '../../assets/images/contactimg.svg'

function CareerPages() {
  return (
    <div id="careerPages">
      <Header />
      <div className="formContainer">
        <div className="contactDetails">
          <div className="heading"><AiFillPhone />Contact Us</div>
          <p><span style={{fontWeight:"bold"}}>Call : </span> <a href="tel:+918187028445">+91 818-702-8445</a></p>
          <p><span style={{fontWeight:"bold"}}>Email : </span> <a href="mailto:careers@isignalresearch.com">careers@isignalresearch.com</a></p>
          <img src={image} alt="" />
        </div>
        <div className="conForm">
          <form>
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='you@company.com' required />
            <input type="tel" placeholder='123-456-7890' required />
            <input type="text" placeholder='Position applying for...' required />
            <div className="resume">
              <label htmlFor="resume">Upload Resumé</label>
              <input type="file" id='resume' required />
            </div>
            <textarea placeholder="Message..."cols={30} rows={10} />
            <button className='Submitbtn'>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareerPages
