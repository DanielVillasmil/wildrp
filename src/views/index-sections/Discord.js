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
              <h2 className="title">OUR DISCORD</h2>
              <h5 className="description">
                We organize our community primarily via Discord. All announcements, application status updats, developer previews, and other general communication can be found there.
              </h5>
            </Col>
            <Button
                className="btn-round"
                color="info"
                href="https://discord.gg/kagKhnW"
                outline
                size="lg"
                target="_blank"
              >
                LAUNCH DISCORD
              </Button>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
