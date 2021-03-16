import React from "react";

// reactstrap components
import { Container, Row, Col, Table } from "reactstrap";
import { Link } from "react-router-dom";


// core components

import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/imgs/cover.jpg'
import IndexHeader from "components/Headers/IndexHeader";

function Donate() {
  return (
    <>
    <IndexHeader />
    <div className="wrapper">
    <div className="main">
      <div className="section" style={{color:'white', backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <div>
                <h2 className="" style={{color:'white'}}>DONATE</h2>
                </div>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>Donate</span></p>
                </div>

                <div style={{padding:'10px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                <img style={{width:'50px', alignItems:'center'}} src={require('assets/img/imgs/stamp.png')} alt='stamp'></img>
                    <p>
                    Giving money to the server is never required but greatly appreciated. Any money sent will be used help us cover server costs (we are aiming to community fundraise about $500 USD a month.) If you would like to help cover those costs you can send money via Paypal to Donations@wildrp.com for a one time payment or sign up for a reoccurring subscription via the links below: 
                    </p>
                </div>
                
                <div>
                  <p>
                    Subscribe monthly via Paypal here (Direct Message Support Bot via <b><a style={{color:'#e4b85d', textDecoration:'none'}} href="https://discord.gg/wildrp">Discord</a></b> for a specific amount) 
                  </p>
                </div>
              <Col>

              <Table borderless>
                  <tbody>
                    <tr>
                      <th><a href='https://py.pl/1F4tPfiddgM' style={{textDecoration:'none', color:'#e4b85d'}}>$5 USD</a></th>
                      <th><a href='https://py.pl/3z5RF' style={{textDecoration:'none', color:'#e4b85d'}}>$30 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/aSFZb' style={{textDecoration:'none', color:'#e4b85d'}}>$10 USD</a></th>
                      <th><a href='https://py.pl/1LTaol' style={{textDecoration:'none', color:'#e4b85d'}}>$40 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/1ciVfH' style={{textDecoration:'none', color:'#e4b85d'}}>$15 USD</a></th>
                      <th><a href='https://py.pl/qgMTl' style={{textDecoration:'none', color:'#e4b85d'}}>$50 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/5ysu9' style={{textDecoration:'none', color:'#e4b85d'}}>$20 USD</a></th>
                      <th><a href='https://py.pl/eehFz'style={{textDecoration:'none', color:'#e4b85d'}} >$75 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/QNNA3zOV4m' style={{textDecoration:'none', color:'#e4b85d'}}>$25 USD</a></th>
                      <th><a href='https://py.pl/fIqHn'style={{textDecoration:'none', color:'#e4b85d'}} >$100 USD</a></th>
                    </tr>
                  </tbody>
              </Table>
                </Col>
              
                <div><p>Please send your Paypal receipt to me upon payment so your supporter role can be updated. Any money sent is strictly given to help cover server costs & to receive the supporter role which gives you access to the suggestions channel.</p>
                </div>

                <div style={{padding:'10px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                <img style={{width:'50px', alignItems:'center'}} src={require('assets/img/imgs/stamp.png')} alt='stamp'></img>
                    <p>
                      If you have subscribed monthly and wish to cancel your subscription you must do so through the Paypal website.
                    </p>
                    <p>
                    <a 
                    style={{textDecoration:'none', color:'#e4b85d'}} 
                    target='_blank' rel="noopener noreferrer" 
                    href="https://www.paypal.com/us/smarthelp/article/how-do-i-cancel-a-billing-agreement,-automatic-recurring-payment-or-subscription-on-paypal-faq2254"
                    >
                      Click here
                    </a>
                    </p>
                </div>

              </Col>
            </Row>
         
          <div className="space-50"></div>
        </Container>
        </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Donate;
