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
                <h2 className="title" style={{color:'white'}}>GENERAL QUESTIONS</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description">We are currently accepting new whitelist applications, fill out our form with as
                        much detail as possible to have the best chance at being accepted. To be eligible for whitelist,
                        you <b>MUST</b> be a member of our community <b><a style={{color:'#e4b85d', textDecoration:'none'}} href="https://discord.gg/wildrp">Discord</a></b>,
                        have microphone suitable for voice-based roleplay, and be 18+
                    
                </h4>
                {/* </div> */}
        </Col>
        
            
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
                <h2 className="title" style={{color:'white'}}>GENERAL QUESTIONS</h2>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                <h4 className="description"><b>WildRP has a set standard of roleplay that we expect from our whitelisted members.</b></h4>
                <p>Please submit some sort of media that showcases your roleplaying ability. Here are a few examples:</p>
                    <p>- Voice Acting Reel</p>
                    <p>- Roleplaying Compilation Video</p>
                    <p>- Narration or Monologue</p>
                    <p>You may also submit links to other forms of media not listed. Twitch clips will be accepted, however please be sure they are concise and representative of your roleplay.
                    Please be creative when submitting your media.</p>
                    <div>
                        <Label for='mediaLinks'>Media Links</Label>
                        <Input type='field' name='text' id='mediaLinks' placeholder=''required />
                    </div>
                    <div>
                    <h2 className="title" style={{color:'white'}}>CHARACTER BACKGROUND</h2>
                    <h4 className="description">If your character background exceeds 100 words, it may be denied.</h4>
                    <p><b>Words:</b> <span id='wordCount'>0</span></p>
                        
                        <Label for='charBackground'>Character Background</Label>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                    </div>

                    <div>
                    <h2 className="title" style={{color:'white'}}>OTHER QUESTIONS</h2>
                    <h4 className="description">How did you hear about WildRP (Twitter, Twitch, Google, Facebook, Referral, etc.)</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />

                    <h4 className="description">Name 3 one word characteristics of a good roleplayer.</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />

                    <h4 className="description">A sheriff, a criminal, and a civilian are all in one area. Please describe a scenario that you think would be unique, and entertaining for all three of these individuals to partake in simultaneously.</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                    
                    <h4 className="description">Do you have past roleplay experience?</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />

                    <h4 className="description">What is RDM and can you provide and example.</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                        
                    <h4 className="description">When is acceptable to break character.</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                        
                    <h4 className="description">What is the definition of Metagaming.</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                    
                    <h4 className="description">If you could have two super powers and had to use them hand in hand, what woukd they be and why? Also, what would be your kryptonite?</h4>
                        <Input type='field' name='text' id='charBackground' placeholder='' required />
                        
                    </div>


                    

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