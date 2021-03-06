import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-bg text-white py-3">
        <Container>
          <Link to="/home">
            <img src="https://i.im.ge/2021/11/10/oYTSXP.png" alt="" />
          </Link>
          <div className="my-5 icons">
            <a
              href="https://www.facebook.com/mohammadohidulalam.moa"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://github.com/ohidulalam66"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/OaNoyon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-ohidul-alam-06a506216/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <hr />
          <p>JUNO Baby Toys Shop © 2021. All Rights Reserved.</p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
