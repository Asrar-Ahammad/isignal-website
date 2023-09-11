import React from "react";
import "./ProductPara.css";

function ProductPara(props) {
  return (
    <>
      <section className="prod-content">
        <h2>{props.contentHeading}</h2>
        <div className="details">
          <p>{props.contentPara}</p>
          <img src={props.contentImg1} />
        </div>
      </section>
    </>
  );
}

export default ProductPara;
