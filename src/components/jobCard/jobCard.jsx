import React from 'react';
import './jobCard.css'
import { Link } from 'react-router-dom';
function JobCard(props) {
    return (
        <>
        <div className="card">
            <div className="content">
                <p className="heading">{props.heading}</p>
                <p className="para">
                    <span>Skills : </span>{props.skills}<br/><br/>
                    <span>Eligibility : </span>{props.eligi}<br/><br/>
                    <span>No. of positions : </span>{props.nop}
                </p>
                <button className="btn">
                <Link to={'/careers'}>Apply Now  →</Link> </button>
            </div>
        </div>
        </>
    )
}

export default JobCard