import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import DataTitle from "../DataTitle/DataTitle.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import DataBoxes from "../DataBoxes/DataBoxes.jsx";
import CountrySelect from "../CountrySelect/CountrySelect.jsx";
import ServiceCovid from "../../service/service.js";

// styles
import "./App.scss";

export default class App extends Component {
  state = {
    service: new ServiceCovid(),
    loading: false,
    title: "Global",
    dataDate: "",
    stats: {},
    countries: [],
  };

  componentDidMount() {
    this.getData((data) => ({
      loading: false,
      dataDate: data.Date,
      stats: data.Global,
      countries: data.Countries,
    }));
  }
  getCountry(country) {
    this.setState(() => {
      return {
        title: country.Country,
        stats: country,
      };
    });
  }
  onClearCountry() {
    if (this.state.title === 'Global') {
      return
    }
    this.getData((data) => ({
      loading: false,
      title: "Global",
      stats: data.Global,
    }));
  }

  getData(newState) {
    const { service } = this.state;
    this.setState({ loading: true });
    service.getCovidData("summary").then((data) => {
      this.setState(() => {
        return newState(data);
      });
    });
  }

  render() {
    const { loading, dataDate, stats, countries, title } = this.state;

    const dataTitle = loading ? (
      <Spinner />
    ) : (
      <DataTitle text={title} dataDate={dataDate} />
    );
    return (
      <div className="app min-h-full">
        <Header />
        <div className="container mx-auto px-2">
          {dataTitle}
          <DataBoxes stats={stats} loading={loading} />
          <CountrySelect
            countries={countries}
            getCountry={(country) => this.getCountry(country)}
          />

          <button
            onClick={this.onClearCountry.bind(this)}
            className="bg-indigo-700 text-white rounded p-3 mb-10 focus:outline-none hover:bg-indigo-600"
          >
            Clear Country
          </button>
        </div>
      </div>
    );
  }
}
