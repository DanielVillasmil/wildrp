import React from "react";
// reactstrap components
import {
  Button,
  Collapse,
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
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
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
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="index.js"
              id="navbar-brand"
            >
            <img  alt="..." src={require("../../assets/img/imgs/logo-white.png")} width='100' ></img>
                    
            </NavbarBrand>
      
          </div>
              <Collapse isOpen={collapseOpen} navbar>
                    <Nav navbar>
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          aria-haspopup={true}
                          caret
                          color="default"
                          href="http://example.com?ref=creativetim"
                          nav
                          
                        >
                          <p style={{fontSize:"15px", color:'#e4b85d'}}>MENU</p>
                        </DropdownToggle>
                        <DropdownMenu style={{backgroundColor:'#000000', color:'white'}}>
                          <DropdownItem
                            href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe"
                            // onClick={(e) => e.preventDefault()}
                            style={{color:'#e4b85d', textDecoration:'none'}}
                          >
                            DOWNLOAD LAUNCHER
                          </DropdownItem>
                          <DropdownItem
                            href="Bugreport.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            BUG REPORT
                          </DropdownItem>
                          <DropdownItem
                            href="Reportplayer.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            REPORT PLAYER
                          </DropdownItem>
                          <DropdownItem
                            href="Banappeal.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            BAN APPEAL
                          </DropdownItem>
                          <DropdownItem
                            href="Allowlist.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            ALLOWLIST
                          </DropdownItem>
                          <DropdownItem
                            href="Staffapp.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            STAFF
                          </DropdownItem>
                          <DropdownItem
                            href="Devapp.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            DEVELOPER
                          </DropdownItem>
                          <DropdownItem
                            href="Lawapp.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            LAW ENFORCEMENT
                          </DropdownItem>
                          <DropdownItem
                            href="Streamapp"
                            // onClick={(e) => e.preventDefault()}
                          >
                            STREAMERS
                          </DropdownItem>
                          <DropdownItem
                            href="Branding.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            BRANDING
                          </DropdownItem>
                          <DropdownItem
                            href="Privacy.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            PRIVACY POLICY
                          </DropdownItem>
                          <DropdownItem
                            href="Rules.js"
                            // onClick={(e) => e.preventDefault()}
                          >
                            RULES
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </Collapse>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
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
                  Like/Subscribe on Youtube
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
                  <i className="fab fa-discord" style={{fontSize:"25px"}}></i>
                  
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Join us in Discord
                </UncontrolledTooltip>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
