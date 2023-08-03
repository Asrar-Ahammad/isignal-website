import React from 'react'
import SiteContent from '../../components/SiteContent/SiteContent'
import image from '../../assets/images/5gran.svg'
function FiveGRAN() {
  return (
    <SiteContent
        heading="5G RAN Domain"
        desc = "Embark on the Future of Connectivity: Unleashing 5G RAN Technology"
        content1="Our 5G RAN Domain program is your gateway to exploring the cutting-edge world of fifth-generation Radio Access Networks. Led by industry experts, our comprehensive training empowers you with in-depth knowledge of 5G architecture, advanced beamforming techniques, and network slicing. Prepare to be at the forefront of the mobile revolution as you dive into ultra-high data speeds, low latency, and massive device connectivity. Embrace the future of connectivity and join us in shaping the world of 5G. Enroll today to unlock boundless opportunities in the telecommunications landscape!"
        content2="The 5G RAN (Radio Access Network) domain is a critical part of the fifth-generation cellular network architecture. It is responsible for connecting user devices (such as smartphones, tablets, and IoT devices) to the core network and enables high-speed data transmission and low-latency communication."
        img={image}
    />
  )
}

export default FiveGRAN