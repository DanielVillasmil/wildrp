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

function Banappeal() {
  React.useEffect(() => {
    document.body.classList.add("banappeal-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("banappeal-page");
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
                <h2 className="title" style={{color:'white'}}>APPEAL BAN</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description">If you have been banned, you can appeal to get your ban lifted below, please be patient
                this
                process can take a little while.</h4>
                {/* </div> */}
        </Col>
        <h2 className="description">QUESTION #1.</h2>
       
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Character name */}
                <div><Input type='field' name='text' id='charName' placeholder='Character Name' required/></div>
            
                {/* Ban ID */}
                <div><Input type='field' name='text' id='banId' placeholder='Ban ID' required/></div>
            
                {/* Date */}
                <div><Input type='field' name='text' id='date' placeholder='Date of ban'required /></div>
    
                {/* ban reason */}
                <div><Input type='field' name='text' id='banReason' placeholder='Ban Reason'required /></div>
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="title" style={{color:'white'}}>QUESTION #2</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                    <div>
                        <Label for='brokenRule'>Why you feel you should be unbanned</Label>
                        <Input type='field' name='text' id='appealReason' placeholder=''required />
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

export default Banappeal;