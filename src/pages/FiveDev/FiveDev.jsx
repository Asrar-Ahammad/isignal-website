import React from 'react'
import SiteContent from '../../components/SiteContent/SiteContent'
import image from '../../assets/images/5gdev.svg'

function FiveDev() {
  return (
    <SiteContent
        heading="5G development"
        desc="Welcome to the Future: 5G Development Training"
        content1="Unleash the potential of fifth-generation technology with our 5G Development Training Program. Led by industry experts, this comprehensive course delves into cutting-edge 5G network architecture, advanced technologies, and practical hands-on projects. Elevate your skills, stay ahead in the telecommunications industry, and be a pioneer in shaping the future of connectivity. Join us now and embrace the limitless possibilities of 5G development! Enroll today to revolutionize your career!"
        content2="5G development refers to the advancement and deployment of the fifth-generation cellular technology. It offers faster speeds, lower latency, increased capacity, and enhanced connectivity with advanced antenna technologies. 5G supports network slicing, edge computing, and broader spectrum use, enabling transformative applications across various industries and shaping the future of communication and connectivity."
        img={image}
    />
  )
}

export default FiveDev