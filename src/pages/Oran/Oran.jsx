import React from 'react'
import SiteContent from '../../components/SiteContent/SiteContent'
import image from '../../assets/images/oran.svg'

function Oran() {
  return (
    <SiteContent
        heading='O-RAN'
        desc="Empowering the Future with O-RAN: Redefining Open and Interoperable Networks"
        content1="Welcome to the world of Open Radio Access Network (O-RAN), where innovation and openness pave the way for a new era of mobile communication. Our O-RAN domain embraces the revolutionary concept of disaggregated RAN architecture, fostering interoperability and vendor diversity. Explore the transformative impact of O-RAN, its architecture, and the benefits it brings to the telecommunications landscape. Join us now to be a part of this cutting-edge movement, shaping the future of mobile connectivity. Embrace the power of O-RAN and unlock limitless possibilities in the world of mobile networks. Enroll today and be at the forefront of redefining network technology with O-RAN!"
        content2="O-RAN, or Open Radio Access Network, is an initiative focused on creating open and standardized interfaces for radio access networks in the telecommunications industry. By promoting interoperability and allowing components from different vendors to work together seamlessly, O-RAN aims to increase flexibility, innovation, and cost-efficiency in building and operating mobile networks. It breaks the traditional vendor lock-in model, encouraging multi-vendor deployments and fostering a more open and competitive ecosystem."
        img={image}
    />
  )
}

export default Oran