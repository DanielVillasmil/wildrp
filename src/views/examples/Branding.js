import React from "react";

// reactstrap components
import {
  Container,
  Col} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'

function Branding() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
});
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="" style={{color:'white'}}>BRANDING</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>BRANDING</span></p>
                </div>

                
                <h4 className="" style={{color:'white'}}>We are keen on keeping things in high quality, so if you are gonna use our art for something, please
                keep it tasteful, you can download our artwork below.
                </h4>
               
        </Col>
        
            
                
        
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
               
                
                    <div>
                    {/* <p>Streamer Package<a href="/branding-dir/wildrp_streamer.zip">Download File</a></p> */}
                    <p>Logo White<a style={{color:'#e4b85d'}} href="../../assets/branding-dir/logo.zip" download>Download File</a></p>
                    <p>Logo Print White<a style={{color:'#e4b85d'}} href="/branding-dir/logo-print.zip">Download File</a></p>
                    <p>Icon 24 x 24 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/24x24.zip">Download File</a></p>
                    <p>Icon 48 x 48 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/48x48.zip">Download File</a></p>
                    <p>Icon 96 x 96 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/96x96.zip">Download File</a></p>
                    <p>Icon 144 x 144 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/144x144.zip">Download File</a></p>
                    <p>Icon 192 x 192 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/192x192.zip">Download File</a></p>
                    <p>Icon 512 x 512 (W)<a style={{color:'#e4b85d'}}href="/branding-dir/512x512.zip">Download File</a></p>
                    <p>Icon 1000 x 1000 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/1000x1000.zip">Download File</a></p>

                    <p>Logo Black<a style={{color:'#e4b85d'}} href="/branding-dir/logo.zip">Download File</a></p>
                    <p>Logo Print Black<a style={{color:'#e4b85d'}} href="/branding-dir/logo-print.zip">Download File</a></p>
                    <p>Icon 24 x 24 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/24x24.zip">Download File</a></p>
                    <p>Icon 48 x 48 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/48x48.zip">Download File</a></p>
                    <p>Icon 96 x 96 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/96x96.zip">Download File</a></p>
                    <p>Icon 144 x 144 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/144x144.zip">Download File</a></p>
                    <p>Icon 192 x 192 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/192x192.zip">Download File</a></p>
                    <p>Icon 512 x 512 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/512x512.zip">Download File</a></p>
                    <p>Icon 1000 x 1000 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/1000x1000.zip">Download File</a></p>
                    </div>
    
                    
                
        </Col>
        </Container>
        </div>

          
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Branding;
