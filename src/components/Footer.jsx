import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} Aziz Sebri</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/azizsebri3"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/azizsebri/"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/azizsebri03/"
                  style={{ color: "white" }}
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
