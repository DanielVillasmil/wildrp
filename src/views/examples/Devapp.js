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

function Devapp() {
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
        <div className="section" style={{color:'white', backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{}}>
                <h2 className="title">DEVELOPER APPLICATION</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description" style={{color:'white'}}>We are always on the lookout for like-minded developers to join our team and help us improve our world. If you are up to the job, please fill in the form below. </h4>
                {/* </div> */}
        </Col>
       
                <h2 className="description">QUESTION #1.</h2>
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Age */}
                <div><Input type='field' name='text' id='age' placeholder='Age' required/></div>
            
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="title" style={{color:'white'}}>QUESTION #2</h2>
                    <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                    <div>
                         <Label for='position'>Have you received any warnings or bans in WildRPs discord or game servers?</Label>
                        <Input type='field' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>What experience do you have with coding and programming? Can you explain any previous projects you have worked on?</Label>
                        <Input type='field' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why are you applyin for this developer position?</Label>
                        <Input type='field' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>What coding languages are you most comfortable with</Label>
                        <Input type='field' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>How much time would you be able to volunteer per week (estimated)</Label>
                        <Input type='field' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>Are you able to work well within a group setting?</Label>
                        <Input type='field' name='text' id='weekhour' placeholder='' required />

                        <Label for='example'>Explain features or systems in short detail, that you would like to develop if given approval?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                    </div>

                    
                {/* </div> */}
        </Col>
                    
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

export default Devapp;