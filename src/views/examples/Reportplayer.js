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

function Reportplayer() {
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
                <h2 className="title" style={{color:'white'}}>REPORT PLAYER</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description">If a player has broken our rules please give us as much information as you can. Including screenshots and a real explanation of what happened.</h4>
                {/* </div> */}
        </Col>
        <h2 className="description">QUESTION #1.</h2>
       
            
                {/* PLAYER ID */}
                <div>
                    <Input type='field' name='text' id='playerId' placeholder='Their Player ID' required/></div>
            
                {/* DATE & TIME */}
                <div><Input type='field' name='text' id='dateTime' placeholder='Date and time' required/></div>
            
                {/* others */}
                <div><Input type='field' name='text' id='otherPlayer' placeholder='Other players involved' required/></div>
            
                {/* rule broken */}
                <div><Input type='field' name='text' id='ruleBroken' placeholder='Specific rules broken'required /></div>
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="title" style={{color:'white'}}>QUESTION #2</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                    <div>
                         <Label for='brokenRule'>How did the player break the rules?</Label>
                        <Input type='field' name='text' id='brokenRule' placeholder=''required />
                    </div>
                    <div>
                        <Label for='reproBug'>Screenshots #1</Label>
                        <Input type='field' name='text' id='reproBug' placeholder='imgur/gyaso link' required />
                        <Label for='reproBug'>Screenshots #2</Label>
                        <Input type='field' name='text' id='reproBug' placeholder='imgur/gyaso link' required />
                    </div>

                    
                    <div><p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
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

export default Reportplayer;