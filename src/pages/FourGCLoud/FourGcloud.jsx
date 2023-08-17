import React from 'react'
import './FourGCloud.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ProductComp from '../../components/ProductsComp/ProductComp'
import ProductPara from '../../components/ProductPara/ProductPara'
import img1 from '../../assets/images/mobile.jpg'

function FourGcloud() {
    return (
        <>
            <Header />
            <div className="main-4gcbody">
                <div className="hero-4cpage">
                    <ProductComp
                        mainHeading='4G Cloud based solutions'
                    />
                </div>
                <ProductPara
                    contentHeading='4G Cloud Setup on AWS Clouds {AWS, GCP, Azure, Kubernetes, Docker, Cluster, Pods, Containers, CI, CD, Jenkins, DevOps}'
                    contentPara="To set up a 4G cloud on AWS, you can use iSignal's software and virtual radio solutions. iSignal's software can automate the deployment and management of 4G networks on AWS, and its virtual radio solutions are designed to work with AWS. However, iSignal's solutions can be expensive, and they can be complex to use."
                    contentImg1={img1}
                />
            </div>
            <Footer />
        </>
    )
}

export default FourGcloud