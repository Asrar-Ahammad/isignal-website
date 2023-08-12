import "./services.css";
import { useState } from "react";

const Services = ({accordionData}) => {
    const [selected, setSelected] = useState(0)
    const handleChange = (index)=>{
        selected === index ? setSelected(null) : setSelected(index)
    }

    return (
        <>
        <div className="serviceWrapper">
            {accordionData.map((a,index)=>(
                <div className="serviceAcc"style={selected===index ? {width:"550px"}: {height:"100px", justifyContent:"center", alignItems:"center"}} onClick={()=>handleChange(index)} key={index}>
                    <h2>{a.heading}</h2>
                    {
                        selected===index&&(
                            <p>{a.desc}</p>
                        ) 
                    }
                </div>
            ))}
        </div>
        </>
    )
};

export default Services;