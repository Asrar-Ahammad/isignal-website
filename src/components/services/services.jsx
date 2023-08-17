import "./services.css";

const Services = ({accordionData}) => {
    return (
        <>
        <div className="serviceWrapper">
            {accordionData.map((a)=>(
                <div className="serviceAcc">
                    <h2>{a.heading}</h2>
                            <p>{a.desc}</p>
                </div>
            ))}
        </div>
        </>
    )
};

export default Services;