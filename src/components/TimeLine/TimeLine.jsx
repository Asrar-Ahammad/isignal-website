import React from 'react'
import './TimeLine.css'

function TimeLine() {
    return (
        <>
            <div className="container">
                <div id="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h2>2017</h2>
                            <p>
                                Founded, Bangalore.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content right">
                            <h2>2018</h2>
                            <p>
                                4G/5G RAN Trainings.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h2>2019</h2>
                            <p>
                                4G/5G PoCs - Lab Setups.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content right">
                            <h2>2020</h2>
                            <p>
                                Academics, Corporate, Support trainings.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h2>2021</h2>
                            <p>
                                FDPs, Lab setups, Internships, Workshops.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content right">
                            <h2>2022</h2>
                            <p>
                                Kurnool branch for Academics and Career support
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <h2>2023</h2>
                            <p>
                                5G, 6G PoC for Global Customers
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content right">
                                <h2>2024</h2>
                                <p>
                                    5G, BSG, 6G with AI/ML/DL R&D Productization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLine