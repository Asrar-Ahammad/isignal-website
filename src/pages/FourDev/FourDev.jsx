import React from 'react'
import SiteContent from '../../components/SiteContent/SiteContent'
import image from '../../assets/images/fg.svg'
function FourDev() {
  return (
    <SiteContent
        heading="4G development"
        desc="Unlock the Power of 4G Development: Elevate Your Mobile Expertise"
        content1="Discover the gateway to cutting-edge mobile technology and propel your career forward. Our industry-leading instructors will equip you with comprehensive knowledge and hands-on experience in 4G RAN architecture, LTE protocols, and network optimization. Join us and become a sought-after expert in 4G development, opening doors to exciting opportunities in the telecommunications industry. Elevate your skills, master 4G technology, and shape the future of mobile connectivity with us. Enroll now and embrace a world of endless possibilities!"
        content2="4G development revolutionized the web by providing faster and more reliable mobile connections. This technology enabled quicker website access, media streaming, and improved user experiences. To optimize websites for 4G, developers used responsive design, image compression, and browser caching. Embracing 4G ensures broader audience reach and seamless browsing, even as we transition to 5G."
        img={image}
    />
  )
}

export default FourDev