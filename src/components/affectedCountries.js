import React from "react";
import "../App.css";
import { Container, Table, Row, Col } from "reactstrap";

const AffectedCountries = (props) => {
  const freeCountry = props.freeCountries.filter(
    (freeCon) => freeCon.Country === props.inputValue
  );

  if (!props.rankSelect) {
    return (
      <Col>
        <Row>Table Loading...</Row>
      </Col>
    );
  } else if (props.inputValue === freeCountry) {
    return (
      <div className="centerDiv">
        <p>Corona Free!</p>
      </div>
    );
  }

  return (
    <div className="centerDiv">
      <Container>
        <Table striped success responsive bordered hover>
          <thead>
            <tr>
              <th>Country</th>
              <th>Total Confirmed</th>
              <th>Total Recovered</th>
              <th>Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            {props.rankSelect.map((eachCountry, index) => {
              return (
                <tr key={index}>
                  <td>{eachCountry.Country}</td>
                  <td>{eachCountry.TotalConfirmed}</td>
                  <td>{eachCountry.TotalRecovered}</td>
                  <td>{eachCountry.TotalDeaths}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AffectedCountries;
