import React from 'react'
import './Solutions.css'
import Header from '../../components/header/header'
import Footer from "../../components/footer/footer";
import medImg from '../../assets/images/healthcare1.jpg';
import eduImg from '../../assets/images/education.jpg';
import defImg from '../../assets/images/drone.jpg';
import agrImg from '../../assets/images/farm.jpg';
import priImg from '../../assets/images/privateEnt.jpg'

function Solutions() {
    return (
        <>
            <Header />
            <div className="sol-content">
                <div className="sol-section">
                    <div className="sol-content">
                        <div>
                            <h3>Health Care</h3>
                            <p>5G offers faster speeds, lower latency, and higher capacity than previous generations of cellular network technology. This makes it ideal for a wide range of healthcare applications, such as telehealth, remote patient monitoring, and robotic surgery. 5G can help to improve patient care, reduce costs, and increase safety in healthcare.</p>
                        </div>
                    </div>
                    <div className="sol-img">
                        <img src={medImg} alt="" loading='lazy'/>
                    </div>
                </div>
                <div className="sol-section">
                    <div className="sol-content">
                        <div>
                            <h3>Education</h3>
                            <p>5G can revolutionize education by providing high-speed connectivity, immersive technology, real-time collaboration, personalized learning, and professional development for teachers. However, there are challenges to ensuring equitable access, privacy, and a balance between digital and traditional methods.</p>
                        </div>
                    </div>
                    <div className="sol-img">
                        <img src={eduImg} alt="" loading='lazy'/>
                    </div>
                </div>
                <div className="sol-section">
                    <div className="sol-content">
                        <div>
                            <h3>Defense</h3>
                            <p>Incorporating 5G technology in defense offers transformative potential, enhancing armed forces with rapid data transmission, mission-critical communication, and real-time situational awareness. It benefits unmanned systems, joint operations, disaster response, and logistics while requiring attention to security and collaboration for effective implementation while upholding national security and ethical considerations.</p>
                        </div>
                    </div>
                    <div className="sol-img">
                        <img src={defImg} alt="" loading='lazy'/>
                    </div>
                </div>
                <div className="sol-section">
                    <div className="sol-content">
                        <div>
                            <h3>Agriculture</h3>
                            <p>The integration of 5G technology in agriculture promises a transformative shift by enabling precision farming through real-time data from sensors, drones, and satellites. This boosts yields, conserves resources, and aids prompt interventions. Smart irrigation, livestock tracking, and IoT devices streamline supply chains and increase efficiency. 5G also bridges connectivity gaps, aids education, and enhances climate adaptation. Overcoming infrastructure and security challenges is crucial for realizing 5G's potential in agriculture.</p>
                        </div>
                    </div>
                    <div className="sol-img">
                        <img src={agrImg} alt="" loading='lazy'/>
                    </div>
                </div>
                <div className="sol-section">
                    <div className="sol-content">
                        <div>
                            <h3>Private Enterprises</h3>
                            <p>Private enterprises drive wireless innovation and communication tech evolution through research, investment, and competition. They deploy infrastructure, foster entrepreneurship, and connect individuals and businesses. Job creation, economic growth, and service diversity follow. Collaboration addresses challenges, while regulatory compliance, cybersecurity, and equitable spectrum allocation remain vital for a flourishing wireless landscape.</p>
                        </div>
                    </div>
                    <div className="sol-img">
                        <img src={priImg} alt="" loading='lazy'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Solutions