/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="privacy.js"
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
