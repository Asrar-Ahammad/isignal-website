import "../achievementsPage/achievements.css"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

import newsimage2 from '../../assets/images/ppt_img2.png'
import newsimage3 from '../../assets/images/ppt_img3.png'
import newsimage4 from '../../assets/images/ppt_img4.png'
import newsimage5 from '../../assets/images/ppt_img.png'

function AchievePage() {
    const dataPipe = [
        {
            img: newsimage2,
            content: 'Achieved 4G and 5G End to End L3 Call Setup',
            p: '',
        },
        {
            img: newsimage3,
            content: '5G RAN Tech Talk, IIT Patna',
            p: "Delivered Tech Talk on 5G RAN at Cyient Hyderabad – Oct 8’2020 – Invited Tech Talk from Wireless Subject Matter Expert, FDPs with Premium Colleges such as IIT Patna",
        },
        {
            img: newsimage4,
            content: '"4G/5G RAN Training at MemPage"',
            p: "Delivered Corporate Training on “4G, 5G RAN Protocol Stack for Developers and Implementers” for MemPage Technologies, Hyderabad – March 2021 for 1.5 Months",
        },

        {
            img: newsimage5,
            content: '100+ Professionals Excel in 4G/5G Training',
            p: "100+ Working Professionals Completed 4G and 5G RAN PS Trainings, 500+Hrs of Sessions, multiple Placements",
        },

        {
            img: newsimage2,
            content: '"4G/5G Solutions Secure Nationwide Clients"',
            p: "Acquired Various Customers Business Across India in Giving 4G and 5G Wireless Solutions",
        },

    ]
    return (
        <>
            <Header />
            <div className='achieve-heading'>
                <h1 className='achieve-heading-style'>Achievements</h1>
            </div>
            <div className="achievements">
                {dataPipe.map((item) => (
                    <div className='achievements-section'>
                        <img src={item.img} alt="" />
                        <div className='content'>
                            <h2>{item.content}</h2>
                            <p>{item.p}</p>
                        </div>
                    </div>))
                }
            </div>
            <Footer />
        </>
    );
}

export default AchievePage;