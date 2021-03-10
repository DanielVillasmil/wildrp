import React from "react";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function Introduction() {
  return (
    <>
      <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="12" md="60" >
              <h1 className="" style={{marginTop:'100px', color:'#e4b85d', fontSize:'150px'}}>A NEW DAY<br></br>IS DAWNING</h1>
              <h2 className="" style={{ color:'white', fontSize:'40px', marginTop:'25px'}}>GET READY TO RIDE IN<br></br> SAINTS CROSSING</h2>
              <h5 className='' style={{ color:'white', fontSize:'28px', marginTop:'100px'}}>
                WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
              </h5>
            </Col>
          </Row>
        </Container>
        <div className='text-center'>
            <Button
                className="btn-round"
                // color="info"
                href="allowlist.js"
                outline
                size="lg"
                style={{color:'#e4b85d', fontSize:'20px', marginTop:'110px', marginBottom:'60px'}}
              >ALLOW-LIST APPLICATIONS
              <img src={require('assets/img/imgs/wheel.svg')}></img>
              </Button>
              </div>
      </div>
    </>
  );
}

export default Introduction;