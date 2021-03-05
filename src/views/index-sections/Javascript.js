import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h1 className="title">A NEW DAY<br></br>IS DAWNING</h1>
              <h2 className="title">GET READY TO RIDE IN<br></br> SAINTS CROSSING</h2>
              <h5 className="description">
                WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
              </h5>
            </Col>
            <Button
                className="btn-round"
                color="info"
                href="allowlist.js"
                outline
                size="lg"
                target="_blank"
              >
                ALLOW-LIST APPLICATION
              </Button>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;