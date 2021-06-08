import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer id="contact" style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i class="far fa-copyright"></i> Copyright 2021{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/amitazadi"
          aria-label="My GitHub"
        >
          amitazadi
        </a>{" "}
        {/* using <i className="fab fa-react" /> */}
        {/* <p>
          <small className="text-muted">
            <h6>PS: I Love Coding</h6>
          </small>
        </p> */}
      </Container>
    </footer>
  );
};

export default Footer;
