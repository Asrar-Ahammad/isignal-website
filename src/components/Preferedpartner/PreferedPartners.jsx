import React from "react";
import "./PrefreredPartners.css";
import tata from "../../assets/images/Tata.png";
import samsung from "../../assets/images/samsung.png";
import capgemini from "../../assets/images/Capgemini.png";
import mahindra from "../../assets/images/Mahindra.png";
import huawei from "../../assets/images/Huawei.png";
import commscope from "../../assets/images/Commscope.png";
import nokia from "../../assets/images/nokia.png";
import qualcomm from "../../assets/images/Qualcomm.png";
import nutaq from "../../assets/images/nutaq.jpeg";
import tcs from "../../assets/images/tcs.jpeg";
import microscale from "../../assets/images/microscale.webp";
import radisys from "../../assets/images/radisys.svg";

const PreferedPartners = () => {
  return (
    <>
      <h1 className="pref-h1">Preferred Partners</h1>
      <div className="sliderBody">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={tata} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={samsung} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={capgemini} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={mahindra} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={huawei} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={commscope} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={nokia} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={qualcomm} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={nutaq} height="50%" width="50%" alt="" />
            </div>
            <div class="slide">
              <img src={tcs} height="25%" width="25%" alt="" />
            </div>
            <div class="slide">
              <img src={microscale} height="25%" width="25%" alt="" />
            </div>
            <div class="slide">
              <img src={radisys} height="50%" width="50%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreferedPartners;
