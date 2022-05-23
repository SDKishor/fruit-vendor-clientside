import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer>
      <div className="logo footerLogo">
        Fruit's <span>Vendor</span>
      </div>
      <div className="contactSec">
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faPhone} />
          <p>646-456-5556</p>
        </div>
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faHouse} />
          <p> 15 Amtola, 11th Road, Arambahg, Dhaka</p>
        </div>
        <div className="contactOption">
          <FontAwesomeIcon className="faicon" icon={faEnvelope} />
          <p>kishorsutra021@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
