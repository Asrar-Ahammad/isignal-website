import React from 'react'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './NewsPage.css'
import newsimage1 from '../../assets/images/news1.jpeg'
import newsimage2 from '../../assets/images/newsimg2.svg'
import newsimage3 from '../../assets/images/newsimg3.svg'

function NewsPage() {
    return (
        <>
            <Header />
            <div className="news">
                <div className='newsSection'>
                    <img src={newsimage1} alt="" />
                    <div className='content'>
                        <h2>iSignal signs MoU with Research Center to Drive 5G Innovation</h2>
                        <p>We are pleased to officially announce the establishment of a Memorandum of Understanding (MoU) partnership with a distinguished Research Center on February 11th, 2019. This collaboration is dedicated to advancing our endeavors in the realm of 5G research activities.</p>
                    </div>
                </div>
                <div className="newsSection">
                    <img src={newsimage2} alt="" />
                    <div className='content'>
                        <h2>Tailored EN-DC Model: Accelerating Sub-6 GHz Solutions in Indian Context</h2>
                        <p>The EN-DC connectivity model has been tailored to facilitate indoor experimentation within non-mobility contexts, specifically focused on Sub-6 GHz bands. This customization is strategically aligned with Indian use cases, aimed at expediting the development of time-to-market solutions.</p>
                    </div>
                </div>
                <div className="newsSection">
                    <img src={newsimage3} alt="" />
                    <div className='content'>
                        <h2>iSignal is poised to equip corporates with the skills they need to succeed in the 4G and 5G era.</h2>
                        <p>The iSignal platform is designed to elevate corporate proficiency in 4G and 5G technologies within the protocols stack domain. Our distinguished team of experts is dedicated to providing comprehensive support to engineers fulfilling diverse roles across the industry.</p>
                    </div>
                </div>
                <h3 className='news-video-heading'>Videos</h3>
                <div className="newsSection">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ms2XCYsfZrY?si=CqWlbMopbqxtVa8y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_XP5C3zy5xM?si=48elrqTc6SQOJJyW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div className="newsSection">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0eVK-ou4H-I?si=qiVtLrrnHgiTH5TJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/T2q86_pvVl0?si=7rbITM5zSEaX3Kx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsPage