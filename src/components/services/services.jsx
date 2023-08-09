import "./services.css";
import SampServices from "./sampServices";
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
                <div className="serviceAcc"style={selected===index ? {width:"450px"}: {width:"100px", justifyContent:"center", alignItems:"center"}} onClick={()=>handleChange(index)} key={index}>
                    <h2 style={selected===index ? {transform:"rotate(0deg)"}:{transform:"rotate(-90deg)"}}>{a.heading}</h2>
                    {
                        selected===index&&(
                            <p>{a.desc}</p>
                        ) 
                    }
                </div>
            ))}
        </div>
        </>
        // <div className="services">
        //     <SampServices
        //         row='row'
        //         img='https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=800'
        //         heading='Research & Developement'
        //         content='A pioneering force in Research and Development, driving futuristic technological advancements with unmatched expertise and innovation.'
        //     />

        //     <SampServices
        //         img='https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
        //         heading='Future Generations'
        //         content='Collaboration with Industry and Academia for the Next Generations Innovations'
        //     />

        //     <SampServices
        //         row='row'
        //         img='https://images.pexels.com/photos/2525871/pexels-photo-2525871.jpeg?auto=compress&cs=tinysrgb&w=800'
        //         heading='Telecommunication industry'
        //         content='Creating impact in the industry in telecom and wireless space'
        //     />
        //     <SampServices
        //         img='https://images.unsplash.com/photo-1480944657103-7fed22359e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGlubm92YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
        //         heading='Innovation'
        //         content='We work with people which thrives the innovation which will eventually leads to business success'
        //     />
        //     <SampServices
        //         row='row'
        //         img='https://images.unsplash.com/photo-1527356900876-cae61d8d8462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdpcmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
        //         heading='Competency Development'
        //         content='Competency Development with Academic and Corporates.'
        //     />
        //     <SampServices
        //         img='https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lyZXMlMjA2Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        //         heading='Resource Center'
        //         content='Workshops, Blogs, Whitepaper, Publications, Internships, Collaboration for passionate works and Development of new products'
        //     />
        // </div>
    )
};

export default Services;