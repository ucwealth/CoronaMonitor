import React from "react";
import "../App.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";

const SearchForm = (props) => {
  return (
    <div className="centerDiv">
      <Container>
        <Form onSubmit={props.fetchCountryData}>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="country">
                  Do you want to search For a specific country?
                </Label>
                <Input
                  type="text"
                  name="country"
                  placeholder="Enter Country Name..."
                  value={props.inputValue}
                  onChange={props.handleInputChange}
                />
                <Button color="success" type="submit">
                  Search
                </Button>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <div className="centerDiv">
                  <label>Rank Countries In Order</label>
                  <Input
                    type="select"
                    name="rankValue"
                    onChange={props.handleRankSelect}
                  >
                    <option value="All">Rank Countries</option>
                    <option value="fromLowest">From Lowest to Highest</option>
                    <option value="fromHighest">From Highest to Lowest</option>
                  </Input>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default SearchForm;
