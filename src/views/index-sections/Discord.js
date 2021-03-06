import React from "react";
import BackgroundImage from '../../assets/img/imgs/footer.jpg'

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section" style={{
        backgroundColor: '#050b0b', marginTop:'-30px'
        
      }}>
        <Container className="text-center" style={{color:'white', marginTop:'80px'}} >
          <Row className="justify-content-md-center">
            <Col lg="8" md="12" >
              <h2 className="title">OUR DISCORD</h2>
              <h5 className="description" style={{ color:'white', fontSize:'25px'}}>
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
                style={{color:'#e4b85d', marginTop:'70px', fontSize:'25px'}}
              >
                LAUNCH DISCORD
              </Button>
              </div>
              <Container className="text-center" >
          <Row className="justify-content-md-center">
          <div className='text-center'>
              <h6 className="description" style={{marginTop:'50px', width:'800px', fontSize:'15px'}}>
                IF YOU ARE NOT ON THE WILDRP DISCORD AT THE TIME OF YOUR APPLICATION SUBMISSION, YOUR APPLICATION WILL BE AUTOMATICALLY DENIED. DUE TO THE CURRENT VOLUME OF APPLICATIONS WILDRP IS CURRENTLY ONLY HANDLING APPLICATION COMMUNICATION VIA DISCORD.
              </h6>
              </div>
            
          </Row>
        </Container>
              
      </div>
    </>
  );
}

export default CompleteExamples;
