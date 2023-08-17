import React from 'react'
import './Fgcloud.css'
import ProductComp from '../../components/ProductsComp/ProductComp'
import ProductPara from '../../components/ProductPara/ProductPara'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";
import img1 from '../../assets/images/research1.jpg'
import img2 from '../../assets/images/LimeSDR.jpeg'
import img3 from '../../assets/images/B210.jpeg'
import img4 from '../../assets/images/raspberry.png'

function Fgcloud() {
    return (
        <>
            <Header />
            <div className="main-4gbody">
                <div className="hero-4page">
                    <ProductComp
                        mainHeading='4G Non Cloud based solutions'
                    />
                </div>
                <ProductPara
                    contentHeading='4G End-to-End Lab Setup - Network in a Box [4G NIB] with Virtual RF'
                    contentPara="iSignal's 4G NIB solution is a turnkey solution that allows you to quickly and easily set up a complete 4G network in your lab. The solution includes everything you need, from the virtual radio to the software, to get started. The virtual radio includes a base station, a UE (user equipment), a controller, and a virtual RF environment. The software includes iSIgnal's 4G NIB software suite and a variety of 4G test cases. The 4G NIB solution is a great way to learn about 4G networks and to develop and test 4G applications. It is also a valuable tool for 4G network operators and vendors."
                    contentImg1={img1}
                />
                <ProductPara
                    contentHeading='4G End-to-End Lab Setup - Network in a Box [4G NIB] with LimeSDR'
                    contentPara="iSignal's 4G NIB with LimeSDR is a turnkey solution that allows you to quickly and easily set up a complete 4G network in your lab. The solution includes a LimeSDR, a base station, a UE, and a controller. The software suite provides a GUI for configuring and managing the network, and there are a variety of test cases for testing the network for different scenarios. This solution is a great way to learn about 4G networks, develop and test 4G applications, and for 4G network operators and vendors."
                    contentImg1={img2}
                />
                <ProductPara
                    contentHeading='4G End-to-End Lab Setup - Network in a Box [4G NIB] with USRP B210, USRP X310'
                    contentPara="iSIgnal's 4G NIB with USRP B210 and USRP X310 is a turnkey solution that allows you to quickly and easily set up a complete 4G network in your lab. The solution includes two high-performance SDRs, a base station, a UE, and a controller. The software suite provides a GUI for configuring and managing the network, and there are a variety of test cases for testing the network for different scenarios. This solution is a great way to learn about 4G networks, develop and test 4G applications, and for 4G network operators and vendors."
                    contentImg1={img3}
                />
                <ProductPara
                    contentHeading='4G End-to End Lab Setup - Network in a Box 4G NIB] with LimeSDR and RasspBerry-Pi4'
                    contentPara="iSIgnal's 4G NIB with LimeSDR and Raspberry Pi 4 is a turnkey solution that allows you to quickly and easily set up a complete 4G network in your lab. The solution includes a LimeSDR, a Raspberry Pi 4, a base station, a UE, and a controller. The software suite provides a GUI for configuring and managing the network, and there are a variety of test cases for testing the network for different scenarios. This solution is a great way to learn about 4G networks and for 4G network operators and vendors."
                    contentImg1={img4}
                />
            </div>
            <Footer />
        </>
    )
}

export default Fgcloud