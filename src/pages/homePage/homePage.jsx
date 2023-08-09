import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Services from "../../components/services/services";
import "./homePage.css"
import video from '../../assets/videos/home-video.mp4'

const accordionData = [
    {
        heading: 'Research & Developement',
        desc: 'A trailblazing presence in the realm of Research and Development, we spearhead transformative technological progress through unparalleled expertise and creative ingenuity. Our pioneering spirit propels us to the forefront of innovation, shaping the future with groundbreaking advancements. With an unwavering commitment to pushing boundaries, we redefine possibilities and consistently achieve feats that redefine the technological landscape. Our legacy is etched in driving positive change, fostering a world where innovation knows no limits.'
    },
    {
        heading: 'Future Generations',
        desc: 'Collaboration with Industry and Academia for the Next Generations Innovations'
    },
    {
        heading: 'Telecommunication industry',
        desc: 'Creating impact in the industry in telecom and wireless space'
    },
    {
        heading: 'Innovation',
        desc: 'We work with people which thrives the innovation which will eventually leads to business success'
    },
    {
        heading: 'Competency Development',
        desc: 'Competency Development with Academic and Corporates.'
    },
    {
        heading: 'Resource Center',
        desc: 'Workshops, Blogs, Whitepaper, Publications, Internships, Collaboration for passionate works and Development of new products'
    }
]

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home-page">
                
                <div className="home-content">
                    <div>
                        <h1><span style={{ color: "#C10000" }}>i</span>Signal<sup>®</sup></h1>
                        <p>Passion Innovates</p>
                    </div>
                </div>
            </div>
            <h2 className="homeh2" style={{marginBottom:"2rem"}}>Why Choose Us</h2>
            <Services accordionData={accordionData} />
            <Footer />
        </>
    );
};

export default HomePage;
