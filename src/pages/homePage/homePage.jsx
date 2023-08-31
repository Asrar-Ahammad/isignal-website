import "./homePage.css"
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Services from "../../components/services/services";
import TimeLine from "../../components/TimeLine/TimeLine";
import video from '../../assets/videos/home-video.mp4'
import PreferedPartners from "../../components/Preferedpartner/PreferedPartners";

const accordionData = [
    {
        heading: 'Research & Developement',
        desc: 'A trailblazing presence in the realm of Research and Development, we spearhead transformative technological progress through unparalleled expertise and creative ingenuity. Our pioneering spirit propels us to the forefront of innovation, shaping the future with groundbreaking advancements. With an unwavering commitment to pushing boundaries, we redefine possibilities and consistently achieve feats that redefine the technological landscape. Our legacy is etched in driving positive change, fostering a world where innovation knows no limits.'
    },
    {
        heading: 'Future Generations',
        desc: 'Forging partnerships between industry and academia, we facilitate the emergence of groundbreaking innovations for the future. Through collaborative efforts, we bridge the gap between theoretical knowledge and practical application, fostering a dynamic environment where industry expertise and academic insights converge. This synergy empowers the next generation of innovators to create transformative solutions, driving progress across diverse sectors. By embracing collaboration, we harness collective strengths to propel technological advancements and ensure a sustainable, forward-looking landscape of innovation and discovery.'
    },
    {
        heading: 'Telecommunication industry',
        desc: 'Catalyzing profound change within the telecom and wireless domain, we are instrumental in shaping industry standards and advancements. Our unwavering dedication to innovation and excellence enables us to deliver transformative solutions that redefine communication paradigms. By seamlessly merging cutting-edge technology with real-world applications, we establish a lasting impact on the industry. Through pioneering research, collaborative partnerships, and visionary strategies, we drive the evolution of telecom and wireless sectors, empowering global connectivity and reshaping the digital landscape.'
    },
    {
        heading: 'Innovation',
        desc: 'Our collaborative efforts revolve around individuals who thrive on innovation, ultimately steering us towards business triumph. By fostering an environment that values creativity and progressive thinking, we harness the power of collective ingenuity. The fusion of diverse minds cultivates ideas that not only drive innovation but also pave the way for prosperous business outcomes. Guided by this synergy, we embark on a journey where originality flourishes, translating into a roadmap for success that propels both our people and the organizations we serve.'
    },
    {
        heading: 'Competency Development',
        desc: 'We champion competency development through a symbiotic relationship between academia and corporations. By bridging the gap between theoretical knowledge and real-world application, we empower individuals with practical skills aligned with industry demands. Collaborative initiatives with academic institutions and corporate partners create a dynamic ecosystem for learning and growth. This approach ensures that our workforce is equipped with the expertise and insights necessary to excel in evolving markets. Our dedication to competence enhancement propels professionals towards successful careers while driving organizational excellence.'
    },
    {
        heading: 'Resource Center',
        desc: 'We engage in multifaceted strategies to foster growth and innovation. Our workshops, blogs, whitepapers, and publications serve as knowledge-sharing platforms, nurturing expertise and awareness. Through internships, we provide hands-on experience, nurturing future talents. Collaborations amplify the impact of passionate endeavors, while the development of novel products showcases our commitment to practical innovation. By integrating these approaches, we cultivate a dynamic ecosystem that drives learning, creativity, and tangible contributions to industry advancement.'
    }
]

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home-page">
                <video className="video-background" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="home-content">
                    <div>
                        <h1 className="home-h1">
                            <span style={{ color: "#C10000" }}>i</span>Signal<sup>®</sup>
                        </h1>
                    </div>
                </div>
            </div>

            <h2 className="homeh2" style={{ margin: "3rem" }}>iSignal Journey</h2>
            <TimeLine />
            <h2 className="homeh2" style={{ margin: "3rem" }}>Why Choose Us</h2>
            <Services accordionData={accordionData} />
            <PreferedPartners/>
            <Footer />
        </>
    );
};

export default HomePage;
