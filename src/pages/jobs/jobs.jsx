import React from 'react'
import JobCard from '../../components/jobCard/jobCard'
import Header from '../../components/header/header'
import './jobs.css';
import Footer from '../../components/footer/footer';

function Jobs() {
    return (
        <>
            <Header />
            <div className="jobsPage">
                <JobCard
                    heading="Embedded Engineer"
                    skills="C, C++, HW Skills, sensors, IOT"
                    eligi="ECE"
                    nop="1"
                />
                <JobCard
                    heading="Wireless Lab Setup Engineer"
                    skills="C, C++, Linux, DS, MT, TCP/IP Protocols"
                    eligi="ECE, CSE, IT"
                    nop="4"
                />
                <JobCard 
                heading="6G SoC/FPGA Design& Verification Engineer"
                skills="GSD, Placement, LD, PD, Routing, RTL, Synthesis,
                VHDL, VeriLog, Cadance, Synopsys, STA"
                eligi="ECE Only"
                nop="4"
                />
                <JobCard 
                heading="5G/6G Research Engineer"
                skills="Al/ML With MATLAB, Python, C++, TensorFlow, Keras"
                eligi="ECE, CSE, DS"
                nop="2"
                />
                <JobCard 
                    heading="5G PHY Algorithm Developer"
                    skills="Simulink, MATLAB, Python, Algorithms, C, C++"
                    eligi="ECE"
                    nop="4"
                />
                <JobCard 
                    heading="5G Tools Developer"
                    skills="Java Core, UI/UX Developers, Python, GUI, Web"
                    eligi="CSE, IT"
                    nop="1"
                />
                <JobCard 
                    heading="DSP Firmware Engineer"
                    skills="Embedded C, Linux, u-boot, Kernel, Device Driver, Kiel, VxWorks, FreeRTOS"
                    eligi="CSE, ECE"
                    nop="1"
                />
                <JobCard 
                    heading="5G Middleware Engineer"
                    skills="C,C++, Linux , ADS, MT Middleware Framework"
                    eligi="CSE"
                    nop="2"
                />
            </div>
            <Footer />
        </>

    )
}

export default Jobs