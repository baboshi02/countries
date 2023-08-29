import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HighestCountries } from "./highestCountries";
// styles
const appStyle = {
  padding: "20px",
  textAlign: "center",
  fontSize: "20px",
  marginTop: "20px",
  marginRight: "10%",
  marginLeft: "10%",
  fontFamily: "Montserrat",
};

const HeaderStyle = {
  backgroundColor: "#2F3C7E",
  padding: "10px",
  color: "#FBEAEB",
};

const searchBarStyle = {
  marginTop: "10px",
  backgroundColor: "#2F3C7E",
  color: "#FBEAEB",
  fontSize: "larger",
  borderRadius: "20px",
  height: "40px",
  textAlign: "center",
  width: "auto",
};

const countriesListStyle = {
  ...HeaderStyle,
  paddingLeft: "10px",
  paddingRight: "10px",
};

const countryStyle = {
  textAlign: "left",
  backgroundColor: "#FBEAEB",
  color: "#2F3C7E",
  // cursor:"pointer"
};

const footerStyle = {
  ...HeaderStyle,

};
// Components
const Header = (props) => {
  return (
    <header style={HeaderStyle}>
      <h1>
        World Coutries <br />
        Data
      </h1>
      <p>Currently We have {props.countriesData.length} Countries</p>
      {/* <p> X satified the search criteria</p> */}
    </header>
  );
};
const SearchBar = ({ setSearch }) => {
  function handleChange(e) {
    const value = e.target.value;
    setSearch(value);
  }
  return (
    <div>
      <input
        autoFocus
        placeholder="Search Countries By Name"
        type="text"
        style={searchBarStyle}
        onChange={handleChange}
      />
    </div>
  );
};

const Country = ({
  countryData: { name, capital, flags, population, languages },
}) => {
  const languagesList = Object.keys(languages);
  const formatedlanguages =
    languagesList.length === 1 ? "Language" : "Languages";
  return (
    <div style={countryStyle}>
      <div style={{ display: "flex", justifyContent: "spaceEvenly" }}>
        <img
          src={flags.png}
          alt={name.common}
          style={{ marginTop: "10px", marginLeft: "25%" }}
        />
      </div>
      <h3 style={{ color: "black" }}>
        Name: <span style={{ color: "grey" }}>{name.common}</span>
      </h3>
      <h3 style={{ color: "black" }}>
        Capital: <span style={{ color: "grey" }}>{capital.join(",")}</span>
      </h3>
      <h3 style={{ color: "black" }}>
        {formatedlanguages}:{" "}
        <span style={{ color: "grey" }}>
          {languagesList.join(",").toUpperCase()}
        </span>
      </h3>
      <h3 style={{ color: "black" }}>
        Population:{" "}
        <span style={{ color: "grey" }}>
          {population.toLocaleString("en-US")}
        </span>
      </h3>
    </div>
  );
};
const CountriesList = ({ countriesData, search }) => {
  let countries;
  if (search) {
    const filteredCountries = countriesData.filter((country) => {
      const countryName = country.name.common.toUpperCase();
      return countryName.includes(search.toUpperCase());
    });
    countries = filteredCountries.map((country) => (
      <Country countryData={country} key={country} />
    ));
  } else {
    countries = countriesData.map((country) => (
      <Country countryData={country} key={country} />
    ));
  }
  return <div style={countriesListStyle}>{countries}</div>;
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h1>Copyright ©2023 Baboshi countries app </h1>
      <h4>Designed and built by Baboshi</h4>
    </footer>
  );
};

// APP component
const App = () => {
  // handling state
  const [data, setData] = useState([]);
  const [search, setSearh] = useState("");
  // fetching data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,languages,population,currency";
      const response = await fetch(url);
      const body = await response.json();
      setData(body);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  // returning jsx
  return (
    <div style={appStyle}>
      <Header countriesData={data} />
      <HighestCountries />
      <SearchBar setSearch={setSearh} />
      <CountriesList countriesData={data} search={search} />
      <Footer />
    </div>
  );
};

// Creating root and rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
