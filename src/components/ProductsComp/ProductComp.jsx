import React from "react";
import "./ProductComp.css";

function ProductComp(props) {
  return (
    <>
      <section className="intro-pro">
        <h2>{props.mainHeading}</h2>
      </section>
    </>
  );
}

export default ProductComp;
