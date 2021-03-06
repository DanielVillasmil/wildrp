import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'
import IndexHeader from "components/Headers/IndexHeader";


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
      <IndexHeader />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="" style={{color:'white'}}>REPORT PLAYER</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>REPORT PLAYER</span></p>
                </div>
                

               
                <h4 className=""style={{color:'white'}}>If a player has broken our rules please give us as much information as you can. Including screenshots and a real explanation of what happened.</h4>
             
        </Col>
        <h2 className=""style={{color:'white'}}>QUESTION #1.</h2>
       
            
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
                <h2 className="" style={{color:'white'}}>QUESTION #2</h2>
                
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
                    <Button
                            className="btn-round"
                            // color="info"
                            
                            outline
                            size="lg"
                            target="_blank"
                            style={{color:'#e4b85d', fontSize:'20px', marginTop:'110px', marginBottom:'60px', background:'transparent', height:'60px', justifyContent:'center'}}
                          >Submit
                            <img style={{width:'40px', alignItems:'center'}} src={require('assets/img/imgs/wheel.svg')} alt='wheel'></img>
                    </Button>
                    
               
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