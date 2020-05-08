import React from "react";
import "../App.css";
import { Container } from "reactstrap";

function Footer() {
  return (
    <div className="centerDiv">
      <footer className="footer">
        <Container>
          <p className="text-muted">
            &copy;2020 | Made With
            <span role="img" aria-label="red-heart">
              ❤️
            </span>
            By Uchechukwu Okeke
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
