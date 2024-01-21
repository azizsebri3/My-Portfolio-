import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tooltip from "@mui/material/Tooltip";
import QrCode from "../assets/frame.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useMediaQuery } from "@mui/material";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const isSm = useMediaQuery("(max-width:765px)");

  return (
    <>
      <Container fluid className="footer">
        <Row>
          {!isSm ? (
            <>
              <Col md="4" className="footer-copywright">
                <img src={QrCode} alt="QrCode" style={{ width: "100px", backgroundColor: '#EAA16E' }} />
                <p style={{ color: 'white' }}>Scan Me With Phone</p>
              </Col>
              <Col md="4" className="footer-copywright">
                <Tooltip title="test" placement="top"><h3>Copyright © {year} Aziz Sebri</h3></Tooltip>
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
                href="https://www.linkedin.com/in/aziz-sbr-12707a269/"
                style={{ color: "white" }}
                target="_blank" 
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/aziz_sbr7/"
                style={{ color: "white" }}
                target="_blank" 
                
              >
                <AiFillInstagram />
              </a>
            </li>
                  
                </ul>
              </Col>
            </>
          ) : (
            <>
              <Col md="4" className="footer-copywright">
                <Tooltip title="test" placement="top"><h3>Copyright © {year} Aziz Sebri</h3></Tooltip>
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
                href="https://www.linkedin.com/in/aziz-sbr-12707a269/"
                style={{ color: "white" }}
                target="_blank" 
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/aziz_sbr7/"
                style={{ color: "white" }}
                target="_blank" 
                
              >
                <AiFillInstagram />
              </a>
            </li>
                </ul>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Footer;
