import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Introduction from "./index-sections/Introduction.js";
import Launcher from "./index-sections/Launcher.js";
import Discord from "./index-sections/Discord.js";
import BackgroundImage from '../assets/img/imgs/cover.jpg'

function Index() {
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
        <IndexHeader />
      <div className="wrapper" >
        <div className="main" >
        <div style={{backgroundImage:`url(${BackgroundImage})`}}>
          
          <Introduction />
          <Launcher />
          <Discord />
        </div>
        <DarkFooter />
      </div>
    </div>
    </>
  );
}

export default Index;
