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
          <p>Call : <a href="tel:+911234567890">+91 123-456-789</a></p>
          <p>email : <a href="mailto:isignal@isignal.com">isignal@isignal.com</a></p>
          <img src={image} alt="" />
        </div>
        <div className="conForm">
          <form>
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <input type="tel" placeholder='Phone' required />
            <input type="text" placeholder='Position applying for...' required />
            <div className="resume">
              <label htmlFor="resume">Upload Resumé</label>
              <input type="file" id='resume' required />
            </div>
            <textarea cols={30} rows={10} />
            <button className='Submitbtn'>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CareerPages
