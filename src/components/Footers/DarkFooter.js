/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" style={{backgroundColor:'black', color:'white', padding:'100px'}}>
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                PRIVACY POLICY
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, WILDRP ALL RIGHTS RESERVED
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
