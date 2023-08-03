import React from 'react'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";
import './Products.css'
import sdrimg from '../../assets/images/sdr.svg'
import setuimg from '../../assets/images/setu.svg'
import radimg from '../../assets/images/os.svg'
import nasigimg from '../../assets/images/prod-ai.svg'
import prodImg from '../../assets/images/prod-img.svg'
import {BsArrowDownCircleFill} from 'react-icons/bs';

function Products() {
    return (
        <>
            <Header />
            <div className="ProductsPage">
                <div className="product-main-page">
                    <div className='prod-head'>
                        <div className="prod-container">
                            <h2>Our Products</h2>
                            <div className="prod-ele">
                                <button className='prod-btn'><a href="#sdr">SDR <BsArrowDownCircleFill className='daw'/></a></button>
                                <button className='prod-btn'><a href="#setu">SethuKrite™ <BsArrowDownCircleFill className='daw'/></a></button>
                                <button className='prod-btn'><a href="#rad">RadOs™ <BsArrowDownCircleFill className='daw'/></a></button>
                                <button className='prod-btn'><a href="#naisig">NAISig™ <BsArrowDownCircleFill className='daw'/></a></button>
                            </div>
                        </div>
                    </div>
                    <div className="prod-img">
                        <img src={prodImg} alt="" />
                    </div>
                </div>
                <div className="product-section" id='sdr'>
                    <h3>SDR</h3>
                    <h4>SDR: Revolutionizing Wireless Communication</h4>
                    <div className="product-content">
                        <img src={sdrimg} alt="" />
                        <p>Software Defined Radio (SDR) is a groundbreaking technology that revolutionizes wireless communication. By utilizing flexible software-based processing, SDR empowers users to adapt and configure radio functionalities dynamically. With SDR, traditional hardware limitations are overcome, enabling seamless support for multiple wireless standards and protocols. This cutting-edge technology paves the way for enhanced spectrum efficiency, reduced development costs, and accelerated deployment of innovative wireless solutions.</p>
                    </div>
                </div>
                <div className="product-section" id='setu'>
                    <h3>SethuKrite™</h3>
                    <h4>Sethukrite NBIs for 5G/NR: Embracing the Future of Connectivity</h4>
                    <div className="product-content">
                        <img src={setuimg} alt="" />
                        <p>Embrace the revolutionary era of 5G with Sethukrite NBIs tailored specifically for 5G/NR networks. This sophisticated system empowers network administrators to monitor and analyze 5G behaviors, anticipate challenges, and optimize network resources. With its AI-driven insights, Sethukrite NBIs for 5G/NR ensures unparalleled performance and reliability in the next-generation connectivity landscape. Seamlessly navigate the world of 5G with confidence, leveraging the full potential of Sethukrite NBIs for 5G/NR.</p>
                    </div>
                </div>
                <div className="product-section" id='rad'>
                    <h3>RadOs™</h3>
                    <h4>RadOS: Next-Gen Real-Time Operating System</h4>
                    <div className="product-content">
                        <img src={radimg} alt="" />
                        <p>RadOS is a cutting-edge real-time operating system (RTOS) designed for seamless embedded systems. It offers real-time performance, low footprint, and advanced middleware, empowering efficient development of IoT devices, industrial automation, and more. Experience the power of RadOS and unlock the potential of your embedded projects. Embrace the future of RTOS with RadOS today!</p>
                    </div>
                </div>
                <div className="product-section" id='naisig'>
                    <h3>NAISig™</h3>
                    <h4>NAISig - Advanced 5G in the eyes of AI</h4>
                    <div className="product-content">
                        <img src={nasigimg} alt="" />
                        <p>NAISig is an avant-garde solution that redefines 5G network management through the eyes of AI. This cutting-edge system leverages Artificial Intelligence to gain unprecedented insights into 5G networks. By analyzing data with AI precision, NAISig proactively identifies network anomalies, predicts potential issues, and optimizes network performance. Stay at the forefront of 5G innovation with NAISig, empowering you to make informed decisions, enhance user experiences, and unlock the true potential of advanced 5G technology. Embrace the power of AI-driven network management with NAISig and pave the way to a smarter and more connected future.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products