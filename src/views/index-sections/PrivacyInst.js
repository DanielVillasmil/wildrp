import React from "react";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

function PrivacyInstr() {
    return (
      <>
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
          <Container className="text-center">
            <Row className="justify-content-md-center">
              <Col lg="8" md="12" >
                
                <h2 className="" style={{ color:'white', fontSize:'40px'}}>GET READY TO RIDE IN<br></br> SAINTS CROSSING</h2>
                <h5 className='' style={{ color:'white', fontSize:'28px', marginTop:'80px'}}>
                  WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
                </h5>
              </Col>
            </Row>
          </Container>
         
        </div>
      </>
    );
  }

  export default PrivacyInstr;