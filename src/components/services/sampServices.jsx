import React from 'react';

function SampServices(props) {
  return (
    <div className="services">
      <div className="service-section" style={{ flexDirection: props.row ? 'row' : 'row-reverse' }}>
        <div className="service-img">
          <img src={props.img} />
        </div>
        <div className="service-content">
          <h3>{props.heading}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  )
}

export default SampServices;
