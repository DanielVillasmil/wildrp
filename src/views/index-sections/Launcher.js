import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Button
} from "reactstrap";

// core components

function Items() {
return(
  <Container className="text-center">
          <Row>
            <div className="col">
              <a href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/imgs/launcher.png")}
                ></img>
              </a>
              <Col lg="6" md="12">
              <h2 className="title"></h2>
              <h5 className="description">
                Our windows launcher is required to play WildRP. If the above image does not work you can use our<a href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe'> alternative download link.</a>
              </h5>
            </Col>
            </div>
            
          </Row>
        </Container>
        )
};

export default Items;
