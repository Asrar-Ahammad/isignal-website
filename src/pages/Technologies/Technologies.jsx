import React from 'react'
import './Technologies.css'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer"
import aiImg from '../../assets/images/ai.jpg'
import esImg from '../../assets/images/pcb.jpg'
import socImg from '../../assets/images/pbc2.jpg'
import radioImg from '../../assets/images/radio.jpg'
import cloudImg from '../../assets/images/datacenter.png'


function Technologies() {
    return (
        <>
            <Header />
            <div className="tech-content">
                <div className="tech-section">
                    <div className="tech-content">
                        <div>
                            <h3>Artificial Intelligence</h3>
                            <p>AI transforms wireless tech with optimized networks, personalized experiences, and efficient resource use. It predicts failures, enhances coverage, and adapts to changing conditions. Edge computing reduces latency, and AI aids in network planning and communication. Data privacy and ethics remain crucial. The AI-wireless partnership promises innovation, efficiency, and connectivity for industries and societies.</p>
                        </div>
                    </div>
                    <div className="tech-img">
                        <img src={aiImg} alt="" />
                    </div>
                </div>
                <div className="tech-section">
                    <div className="tech-content">
                        <div>
                            <h3>Embedded Systems</h3>
                            <p>Embedded systems are compact computing systems integrated into devices, enabling automation and connectivity. Found in everyday objects, they enhance capabilities with tailored hardware and software. From consumer electronics to industrial automation, they play a crucial role, contributing to convenience and innovation across industries by optimizing efficiency and reliability.</p>
                        </div>
                    </div>
                    <div className="tech-img">
                        <img src={esImg} alt="" />
                    </div>
                </div>
                <div className="tech-section">
                    <div className="tech-content">
                        <div>
                            <h3>Soc Chip Design</h3>
                            <p>System-on-Chip (SoC) design consolidates multiple functions onto a single chip, driving smartphones, IoT devices, and more. Hardware-software interaction is optimized for efficiency, performance, and power use. Intricate planning, verification, and integration ensure functionality. Advancements allow more features on smaller chips. SoC design powers innovation, yielding compact, powerful, energy-efficient devices in various industries.</p>
                        </div>
                    </div>
                    <div className="tech-img">
                        <img src={socImg} alt="" />
                    </div>
                </div>
                <div className="tech-section">
                    <div className="tech-content">
                        <div>
                            <h3>Software Defined Radio</h3>
                            <p>Software Defined Radio (SDR) transforms wireless communication through software-controlled reconfiguration of radio hardware, supporting diverse protocols and frequencies in a single device. It simplifies management, reduces costs, and fosters innovation by enabling quick updates. SDR empowers industries, researchers, and enthusiasts to experiment and innovate, revolutionizing wireless tech with its adaptability and efficiency.</p>
                        </div>
                    </div>
                    <div className="tech-img">
                        <img src={radioImg} alt="" />
                    </div>
                </div>
                <div className="tech-section">
                    <div className="sol-content">
                        <div>
                            <h3>Cloud</h3>
                            <p>Cloud computing revolutionizes data, app, and service management by providing on-demand computing resources via the internet. Models like IaaS, PaaS, and SaaS enhance scalability, cost-efficiency, and flexibility. It empowers users with powerful data centers for storage, processing, and collaboration, fostering innovation. Data security and vendor lock-in are key considerations. Cloud computing redefines tech utilization through dynamic accessibility.</p>
                        </div>
                    </div>
                    <div className="tech-img">
                        <img src={cloudImg} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Technologies