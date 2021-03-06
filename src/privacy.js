import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../assets/img/imgs/cover.jpg'
import PrivacyInstr from "./views/index-sections/PrivacyInst";

function Privacy() {
    React.useEffect(() => {
      document.body.classList.add("index-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("index-page");
        document.body.classList.remove("sidebar-collapse");
      };
    });
    return (
      <>
      <IndexNavbar />
        <div className="wrapper" >
          <div className="main" >
          <div style={{backgroundImage:`url(${BackgroundImage})`}}>
           
          </div>
          <DarkFooter />
          <PrivacyInstr/>
        </div>
      </div>
      </>
    );
  }
  
  export default Privacy;
  