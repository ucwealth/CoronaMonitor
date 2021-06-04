import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import SearchForm from "./components/form";
import AffectedCountries from "./components/affectedCountries";

class App extends Component {
  state = {
    TotalConfirmed: undefined,
    TotalDeaths: undefined,
    TotalRecovered: undefined,
    allAffectedCountries: [],
    freeCountries: [],
    inputValue: "",
    rankValue: "",
  };

  fetchCovidData = () => {
    (function() {
      var cors_api_host = 'cors-anywhere.herokuapp.com';
      var cors_api_url = 'https://' + cors_api_host + '/';
      var slice = [].slice;
      var origin = window.location.protocol + '//' + window.location.host;
      var open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function() {
          var args = slice.call(arguments);
          var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
          if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
              targetOrigin[1] !== cors_api_host) {
              args[1] = cors_api_url + args[1];
          }
          return open.apply(this, args);
      };
  })();

    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://api.covid19api.com/summary`;

    return fetch(api).then((response) => {
      return response.json();
    });
  };

  fetchCountryData = (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    if (country) {
      this.fetchCovidData().then((data) => {
        const countryInput = data.Countries.filter(
          (eachCountry) => eachCountry.Country === country
        );
        console.log(countryInput);
      });
    } else {
      console.log("Please Enter A Valid Country!");
    }
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleRankSelect = (e) => {
    this.setState({ rankValue: e.target.value });
  };

  rankSelect = (allAffectedCountries) => {
    if (this.state.rankValue === "fromLowest") {
      return [...allAffectedCountries].sort((a, b) => {
        if (a.TotalConfirmed > b.TotalConfirmed) {
          return 1;
        } else if (a.TotalConfirmed < b.TotalConfirmed) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (this.state.rankValue === "fromHighest") {
      return [...allAffectedCountries].sort((a, b) => {
        if (a.TotalConfirmed > b.TotalConfirmed) {
          return -1;
        } else if (a.TotalConfirmed < b.TotalConfirmed) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return allAffectedCountries;
    }
  };

  componentDidMount() {
    this.fetchCovidData()
      .then((data) => {
        //generate array of affected countries
        const affectedCountries = [];
        const freeCountries = [];
        data.Countries.map((eachCon) => {
          if (eachCon.TotalConfirmed < 1) {
            freeCountries.push(eachCon);
          } else {
            affectedCountries.push(eachCon);
          }
          return affectedCountries;
        });
        // end of the generation

        this.setState({
          TotalConfirmed: data.Global.TotalConfirmed,
          TotalDeaths: data.Global.TotalDeaths,
          TotalRecovered: data.Global.TotalRecovered,
          allAffectedCountries: affectedCountries,
          freeCountries: freeCountries,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const {
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      allAffectedCountries,
      inputValue,
      rankValue,
      freeCountries,
    } = this.state;

    const filteredCountries = allAffectedCountries.filter((country) => {
      return country.Country.toLowerCase().includes(inputValue.toLowerCase());
    });

    return (
      <div className="App">
        <Header />
        <Main
          TotalConfirmed={TotalConfirmed}
          TotalDeaths={TotalDeaths}
          TotalRecovered={TotalRecovered}
        />
        <br />
        <SearchForm
          fetchCountryData={this.fetchCountryData}
          inputValue={inputValue}
          handleInputChange={this.handleInputChange}
          handleRankSelect={this.handleRankSelect}
          rankValue={rankValue}
        />
        <br />
        <AffectedCountries
          inputValue={inputValue}
          rankSelect={this.rankSelect(filteredCountries)}
          freeCountries={freeCountries}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
