import React from "react";
// eslint-disable-next-line no-unused-vars
import BackgroundImage from '../../assets/img/imgs/footer.jpg'

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function Discord() {
  return (
    <>
      <div className="section" style={{
        backgroundColor: '#050b0b'
        
      }}>
        <Container className="text-center" style={{color:'white', marginTop:'70px'}} >
          <Row className="justify-content-md-center">
            <Col lg="10" md="12" >
              <h2 >OUR DISCORD</h2>
              <h5 className="description" style={{ color:'white', fontSize:'25px', marginTop:'75px'}}>
                We organize our community primarily via Discord. All announcements, application status updats, developer previews, and other general communication can be found there.
              </h5>
            </Col>
            
          </Row>
        </Container>
        <div className='text-center'>
            <Button
                className="btn-round"
                // color="info"
                href="https://discord.gg/kagKhnW"
                outline
                size="lg"
                target="_blank"
                style={{color:'#e4b85d', fontSize:'20px', marginTop:'110px', marginBottom:'60px', background:'transparent', height:'60px', justifyContent:'center'}}
              >
                LAUNCH DISCORD
                <img style={{width:'40px', alignItems:'center'}} src={require('assets/img/imgs/wheel.svg')}></img>
              </Button>
              </div>
              <Container className="text-center" >
          <Row className="justify-content-md-center">
          <div className='text-center'>
            <Col lg='8' md='10'>
              <h6 className="" style={{marginTop:'60px', width:'800px', fontSize:'12px'}}>
                IF YOU ARE NOT ON THE WILDRP DISCORD AT THE TIME OF YOUR APPLICATION SUBMISSION, YOUR APPLICATION WILL BE AUTOMATICALLY DENIED. DUE TO THE CURRENT VOLUME OF APPLICATIONS WILDRP IS CURRENTLY ONLY HANDLING APPLICATION COMMUNICATION VIA DISCORD.
              </h6>
              </Col>
              </div>
            
          </Row>
        </Container>
              
      </div>
    </>
  );
}

export default Discord;
