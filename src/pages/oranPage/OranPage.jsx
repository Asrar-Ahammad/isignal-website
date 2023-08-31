import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ProductComp from '../../components/ProductsComp/ProductComp'
import ProductPara from '../../components/ProductPara/ProductPara'
import './OranPage.css'
import img from '../../assets/images/oran1.jpg'

const OranPage = () => {
  return (
    <>
        <Header/>
        <div className="main-5gcbody">
                <div className="hero-oranpage">
                    <ProductComp
                        mainHeading='O-RAN'
                    />
                </div>
                <ProductPara
                    contentPara="O-RAN (Open Radio Access Network) is an open, flexible, and interoperable architecture for mobile networks. It separates the software and hardware components of the RAN, which allows operators to choose the best-of-breed solutions for their needs. This can lead to lower costs, improved performance, and greater innovation.O-RAN is not controlled by any single vendor, which gives operators the freedom to choose the best-of-breed solutions for their needs.
                     O-RAN is a flexible architecture that can be easily adapted to operators' specific needs.
                     O-RAN is designed to be interoperable with existing RAN architectures, which makes it easy for operators to migrate to O-RAN."
                    contentImg1={img}
                />
            </div>
        <Footer/>
    </>
  )
}

export default OranPage