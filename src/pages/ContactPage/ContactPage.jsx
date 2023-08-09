import React from 'react'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";
import './ContactPage.css'
import { TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { BsFacebook, BsTwitter, BsYoutube, BsWhatsapp, BsLinkedin, BsMicrosoftTeams } from 'react-icons/bs';

function ContactPage() {
    return (
        <>
            <Header />
            <div className="contactForm">
                <div className="ContactDetails">
                    <div className="cont-container">
                        <div className="con-section">
                            <h3>Visit us</h3>
                            <p>Come and say Hello at our office HQ.</p>
                            <p>#389, 1st Floor,<br />
                                3rd Cross, 2nd Main, Aswath Nagar,<br />
                                Marathahalli,Bangalore 560037</p>
                        </div>
                        <div className="con-section">
                            <h3>Chat to us</h3>
                            <p>Our friendly team is here to help.</p>
                            <a href="mailto:isignal@isignal.com">isignal@isignal.com</a>
                        </div>
                        <div className="con-section">
                            <h3>Call us</h3>
                            <p>Mon-Fri from 9am-5pm</p>
                            <a href="tel:+911234567890">(+91) 123-456-789</a>
                        </div>
                        <div className="con-section">
                            <h3>Social media</h3>
                            <div className="socialCon">
                                <a href=""><BsLinkedin /></a>
                                <a href="https://twitter.com/isignalresearch"><BsTwitter /></a>
                                <a href="https://www.youtube.com/channel/UCniUAbWz6YT2XEeCSBhVoCQ"><BsYoutube /></a>
                                <a href="https://chat.whatsapp.com/BkqZKlRKbPP0TfLFYVpCu8"><BsWhatsapp /></a>
                                <a href=""><BsFacebook /></a>
                                <a href=""><BsMicrosoftTeams /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form>
                        <div className="name">
                            <input type="text" placeholder='First Name' required />
                            <input type="text" placeholder='Last Name' required />
                        </div>
                        <input type="text" placeholder='Company' required />
                        <input type="email" placeholder='you@sample.com' required />
                        <input type="tel" placeholder='(+91) 123-456-7890' required />
                        <textarea placeholder='Message....' cols="30" rows="10"></textarea>
                        <button className='Sentbtn'>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactPage