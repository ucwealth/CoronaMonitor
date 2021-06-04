import React from "react";
import "../App.css";
import { Row, Col, Container } from "reactstrap";

function Main(props) {
  const styles = {
    paddingTop: '20px', 
    textAlign: "center",
    color: 'green',
    fontWeight: 'bolder'
  }
  return (
    <div className="main">
      <Container>
        <h2 style={styles} className="project-font">Global Corona Virus Statistics</h2>
        <br />
        <Row>
          <Col xs="4">
            <p>
              Total Confirmed Cases: <strong>{props.TotalConfirmed}</strong>
            </p>
          </Col>

          <Col xs="4">
            <p>
              Total Recovered Cases: <strong>{props.TotalRecovered}</strong>{" "}
            </p>
          </Col>

          <Col xs="4">
            <p>
              Total Deaths:
              <br />
              <strong>{props.TotalDeaths}</strong>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
