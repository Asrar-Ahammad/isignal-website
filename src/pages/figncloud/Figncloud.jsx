import React from 'react'
import './Figncloud.css'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ProductComp from '../../components/ProductsComp/ProductComp'
import ProductPara from '../../components/ProductPara/ProductPara'
import img1 from '../../assets/images/tower14.jpg'

function Figncloud() {
    return (
        <>
            <Header />
            <div className="main-5gbody">
                <div className="hero-page">
                    <ProductComp
                        mainHeading='5G Non Cloud based solutions'
                    />
                </div>
                <ProductPara
                    contentHeading='5G End-to-End Lab Setup - Network in a Box [5G NIB] - SA, NSA-UERANSIM+open5GS'
                    contentPara="iSIgnal's 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. The solution includes a UERANSIM, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors. The solution is quick and easy to set up, and it includes everything you need to get started. The software-defined radio platform allows for flexibility and customization, and the open-source software suite allows for community support and collaboration. The solution also includes a variety of test cases, so you can test your network for a variety of scenarios."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='5G End-to-End Lab Setup - Network in a Box [5G NIB] - SA, NSA - open5GS'
                    contentPara="iSIgnal's 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. The solution includes everything you need, from the hardware to the software, to get started. The solution is quick and easy to set up, and it includes a UERANSIM, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='5G End-to-End Lab Setup - Network in a Box [5G NIB] - SA, NSA - free5GC'
                    contentPara="iSIgnal's 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. The solution includes everything you need to get started, including a UERANSIM, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='OAI 5G End-to-End Lab Setup - Network in a Box [5G NIB] with USRP B210'
                    contentPara="The OAI 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. The solution includes everything you need, from the hardware to the software, to get started. It includes a USRP B210, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='OAI 5G End-to-End Lab Setup - Network in a Box [5G NIB] with USRP X310'
                    contentPara="The OAI 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. The solution includes everything you need, from the hardware to the software, to get started. It includes a USRP X310, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='O-RAN End-to End Lab Setup - Network in a Box [5G NIB]'
                    contentPara="The O-RAN 5G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 5G network in your lab. It includes everything you need, from the hardware to the software, to get started. It includes an SDR platform, a server, a base station, a UE, and a variety of test cases. This solution is a great way to learn about 5G networks, develop and test 5G applications, and for 5G network operators and vendors."
                    contentImg1={img1}
                />
            </div>
            <Footer />
        </>
    )
}

export default Figncloud