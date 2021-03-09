import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  FormText,
  Label,
  FormGroup,
  FormControl
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'
import AlertImage from '../../assets/img/imgs/stamp.png'

function Bugreport() {
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
                <h2 className="title" style={{color:'white'}}>BUG REPORT</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description">Please help us by taking a few minutes to fill out the form bellow if you have experienced a bug on one of our servers. Please make sure you fill out everything as in-depth as possible.</h4>
                {/* </div> */}
        </Col>
        <h2 className="description">QUESTION #1.</h2>
       
            
                {/* DISCORD */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/></div>
            
                {/* Steam 64 ID */}
                <div><Input type='field' name='text' id='steamId' placeholder='Steam 64 ID (https://steamidfinder.com)' required/></div>
            
                {/* pastebin */}
                <div><Input type='field' name='text' id='citizenfx' placeholder='CitizenFX.log (pastebin.com)' required/></div>
            
                {/* screenshot */}
                <div><Input type='field' name='text' id='screenshot' placeholder='Screenshot #1 (imgur/gyaso link)'required /></div>
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="title" style={{color:'white'}}>QUESTION #2</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                    <div>
                         <Label for='bugDescription'>What is the bug? Please make sure you are as detailed as possible</Label>
                        <Input type='field' name='text' id='bugDescription' placeholder=''required />
                    </div>
                    <div>
                        <Label for='reproBug'>Steps to reproduce the bug</Label>
                        <Input type='field' name='text' id='reproBug' placeholder='' required />
                    </div>

                    
                        <FormGroup>
                            <Button>Submit</Button>
                        </FormGroup>
                    
                {/* </div> */}
        </Col>
        </Container>
        </div>

          
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Bugreport;