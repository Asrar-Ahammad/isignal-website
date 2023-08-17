import React from 'react'
import './FiveGCLoud.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ProductComp from '../../components/ProductsComp/ProductComp'
import ProductPara from '../../components/ProductPara/ProductPara'
import img1 from '../../assets/images/mobile.jpg'

function FiveGCloud() {
    return (
        <>
            <Header />
            <div className="main-5gcbody">
                <div className="hero-5cpage">
                    <ProductComp
                        mainHeading='5G Cloud based solutions'
                    />
                </div>
                <ProductPara
                    contentHeading='5G Cloud Setup on AWS Cloud {AWS, GCP, Azure, Kubernetes, Docker, Cluster, Pods, Containers, CI, CD, Jenkins, DevOps}'
                    contentPara="To set up a 5G cloud on AWS, you will need to create an AWS account, configure your billing information, create a VPC and subnets, launch EC2 instances, install Kubernetes, deploy your 5G network containers on Kubernetes, configure your 5G network using the Kubernetes dashboard, and test your 5G network.
                    AWS offers a wide range of services that can be used to build and deploy 5G networks, including EC2 instances, S3 buckets, Lambda functions, and Kubernetes. AWS is also highly scalable and reliable, making it a good choice for 5G networks that need to handle large volumes of traffic."
                    contentImg1='https://www.bbva.ch/wp-content/uploads/2021/07/2-.-Ventajas-y-desventajas-de-la-tecnologia-5G-1.png'
                />
            </div>
            <Footer />
        </>
    )
}

export default FiveGCloud