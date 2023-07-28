import "./services.css";
import contentData from "./serviceContent";

const Services = () => {

    return (
        <div className="services">
            <div className="service">
                <div className="service-img ">
                    <img src={contentData.id1.image} className="odd" />
                </div>
                <div className="service-content odd-content">
                    <h3>{contentData.id1.heading}</h3>
                    <p>{contentData.id1.content}</p>
                </div>
            </div>
            <div className="service">
                <div className="service-img ">
                    <img src={contentData.id2.image} className="even" />
                </div>
                <div className="service-content ">
                    <h3>{contentData.id2.heading}</h3>
                    <p>{contentData.id2.content}</p>
                </div>
            </div>
            <div className="service">
                <div className="service-img ">
                    <img src={contentData.id3.image} className="odd"/>
                </div>
                <div className="service-content odd-content">
                    <h3>{contentData.id3.heading}</h3>
                    <p>{contentData.id3.content}</p>
                </div>
            </div>
            <div className="service">
                <div className="service-img">
                    <img src={contentData.id4.image} className="even" />
                </div>
                <div className="service-content">
                    <h3>{contentData.id4.heading}</h3>
                    <p>{contentData.id4.content}</p>
                </div>
            </div>
            <div className="service">
                <div className="service-img ">
                    <img src={contentData.id5.image} className="odd"/>
                </div>
                <div className="service-content odd-content">
                    <h3>{contentData.id5.heading}</h3>
                    <p>{contentData.id5.content}</p>
                </div>
            </div>
            <div className="service">
                <div className="service-img">
                    <img src={contentData.id6.image} className="even" />
                </div>
                <div className="service-content">
                    <h3>{contentData.id6.heading}</h3>
                    <p>{contentData.id6.content}</p>
                </div>
            </div>
        </div>
    )
};

export default Services;