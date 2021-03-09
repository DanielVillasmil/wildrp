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

function Allowlist() {
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
                <h2 className="title" style={{color:'white'}}>LAW APPLICATION</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description">Law Enforcement applications are currently available for whitelisted members only.
                        Please provide as much detail as possible to the questions below as these positions will be
                        limited and in high demand, and we want to be sure this department provides satisfying roleplay
                        for our community.
                    
                </h4>
                {/* </div> */}
        </Col>
        
                <h2 className="title" style={{color:'white'}}>QUESTION #1</h2>
                {/* DISCORD */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
            
                {/* Steam 64 ID */}
                <div><Input type='field' name='text' id='steamId' placeholder='Steam 64 ID (https://steamidfinder.com)' required/></div>
            
            
                {/* Twitch/FB */}
                <div><Input type='field' name='text' id='twitchFacebook' placeholder='Twitch / Facebook' required/></div>
            
            
                {/* Time Zone */}
                <div><Input type='field' name='text' id='timeZone' placeholder='Time Zone'required /></div>
            
        
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="title" style={{color:'white'}}>QUESTION #2</h2>
                <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <div>
                         <Label for='position'>Do you have past Law Enforcement experience? If, for how long?</Label>
                        <Input type='field' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>Do you have past LEO roleplay experience? If so, for how long?</Label>
                        <Input type='field' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why should your character be hired for Law Enforncement? Who might (in character) recommend you?</Label>
                        <Input type='field' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>Which LEO Role are you applying for? (Sheriff, Deputy)</Label>
                        <Input type='field' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>In your role, what tasks do you expect to perform? How capable is your character of performing these tasks?</Label>
                        <Input type='field' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>Do you plan on being corrupt in any way? If yes, what are your reasons for doing so?</Label>
                        <Input type='field' name='text' id='weekhour' placeholder='' required />

                        <Label for='example'>You have shot down the neighborhood outlaw as he was getting rowdy in the saloon and drew his weapon. What are your next steps?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                        <Label for='example'>When is it appropiate for you, as an LEO of the server, to shoot another player with the intention to kill them?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                    </div>

                    
                {/* </div> */}
        </Col>


                    

                    <div><p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
                    </div>
                    <div>
                        <FormGroup>
                            <Button>Submit</Button>
                        </FormGroup>
                    </div>
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

export default Allowlist;