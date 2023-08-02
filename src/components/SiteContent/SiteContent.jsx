import React from 'react'
import './SiteContent.css'
import Header from '../header/header'
import Footer from '../footer/footer'

function SiteContent(props) {
  return (
    <>
      <Header />
      <div className="Content">
        <div className="ContentImage">
          <div className="svg">
            <img src={props.img} alt="" />
          </div>
        </div>
        <div className="ContentDesc">
          <h3>{props.heading}</h3>
          <h5>{props.desc}</h5>
          <p className='content1'>{props.content1}</p>
          <p>{props.content2}</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SiteContent