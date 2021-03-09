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
  <Container className="text-center" style={{}} >
          <Row className="justify-content-md-center">
            <div className="col">
              <a href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/imgs/launcher.png")}
                ></img>
              </a>
              <div className="text-center" style={{marginTop:'50px', justifyContent:'center', display:'flex'}}>
              <h3 className="description" style={{width:'600px', color:'white' }} >
                Our windows launcher is required to play WildRP. If the above image does not work you can use our<a href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe' style={{color:'#e4b85d', textDecoration:'none'}}  > alternative download link.</a>
              </h3>
              </div>
            </div>
            
          </Row>
        </Container>
        )
};

export default Items;
