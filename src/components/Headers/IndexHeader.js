/*eslint-disable*/
import React from "react";

// reactstrap components
import { Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip } from "reactstrap";
  import { Link } from "react-router-dom";
import Dropdown from "reactstrap/lib/Dropdown";
// core components

function IndexHeader() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("dark");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark" style={{padding:'10px'}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
            >
            <img  alt="..." src={require("../../assets/img/imgs/logo-white.png")} width='100'></img>  
            </NavbarBrand>
      
          </div>
              <Collapse isOpen={collapseOpen} navbar>
                    <Nav navbar>
                      <UncontrolledDropdown nav>
                       
                        <DropdownToggle nav className='dropbtn top-button-show'  style={{color:'#e4b85d', fontSize:'15px', textDecoration:'none'}}>
                          MENU
                        </DropdownToggle>
                        
                        <DropdownMenu style={{backgroundColor:'#000000', color:'white', width:'200px', padding:'11px'}}>
                          
                          <DropdownItem 
                            tag='a' 
                            href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe'
                            style={{color:'#e4b85d', textDecoration:'none'}}
                            >DOWNLOAD LAUNCHER
                          </DropdownItem>
                            
                          <DropdownItem />
                          
                          <DropdownItem tag='a' href='/bugs'>bug report</DropdownItem>
                          <DropdownItem tag='a' href='/report'>Report player</DropdownItem>
                          <DropdownItem tag='a' href='/appeal'>Ban Appeal</DropdownItem>
                          
                          <DropdownItem />
                          
                          <DropdownItem tag='a' href='/allowlist'>Allowlist</DropdownItem>
                          <DropdownItem tag='a' href='/staff'>Staff</DropdownItem>
                          <DropdownItem tag='a' href='/developer'>Developer</DropdownItem>
                          <DropdownItem tag='a' href='/law'>Law Enforcement</DropdownItem>

                          <DropdownItem />

                          <DropdownItem tag='a' href='/streamers'>Streamers</DropdownItem>
                          <DropdownItem tag='a' href='/branding'>Branding</DropdownItem>

                          <DropdownItem />
                          
                          <DropdownItem tag='a' href='/privacy'>Privacy policy</DropdownItem>
                          <DropdownItem tag='a' href='/rules'>Rules</DropdownItem>
                          <DropdownItem tag='a' href='/Donate'>Donate</DropdownItem>
                          <DropdownItem tag='a' href='https://www.merchgardens.com/collections/WildRP'>Merchendise</DropdownItem>
                            
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
            </Collapse>
          
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/channel/UCAfpEZ4Ffb8i1sqYHDLijXA"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-youtube-square" style={{fontSize:"25px"}}></i>
                  
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Like & Subscribe on Youtube
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/WildRPofficial"
                  target="_blank"
                  id="facebook-tooltip" 
                >
                  <i className="fab fa-twitter" style={{fontSize:"25px"}}></i>
                  
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://discord.gg/kagKhnW"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  a<i className="fab fa-discord" style={{fontSize:"25px"}}></i>
                  
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Join us in Discord
                </UncontrolledTooltip>
              </NavItem>
              
            </Nav>
          
        </Container>
      </Navbar>
    </>
  );
}

export default IndexHeader;
