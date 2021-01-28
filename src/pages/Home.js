import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
function Home() {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [dataFound, setDataFound] = useState(false);
  const [rangeValue, setRangeValue] = useState(250);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "Europe", "Oceania", "Asia", "America"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      //   console.log(response.data);
      setCountries(response.data);
      setDataFound(true);
    };
    fetchData();

    if (dataFound) {
      const sortedCountry = () => {
        const countryObj = Object.keys(countries).map((i) => countries[i]);
        // console.log(countryObj);
        const sortedArray = countryObj.sort(function (a, b) {
          return b.population - a.population;
        });
        sortedArray.length = rangeValue;
        console.log(sortedArray);
        setSortedCountries(sortedArray);
      };
      sortedCountry();
    }
  }, [dataFound, rangeValue]);
  console.log(selectedRadio);

  return (
    <div>
      <div>
        <div>
          <input
            value={rangeValue}
            type="range"
            id="range"
            min="1"
            max="250"
            onChange={(event) => {
              setRangeValue(event.target.value);
            }}
          />
          <label htmlFor="range">Countries :{rangeValue}</label>
        </div>
        <ul>
          {radios.map((radio, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  name="radio"
                  id={radio}
                  value={radio}
                  checked={radio === selectedRadio}
                  onChange={(event) => {
                    setSelectedRadio(event.target.value);
                  }}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="countries">
        {sortedCountries
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => {
            return <Card key={country.name} country={country} />;
          })}
      </div>
    </div>
  );
}

export default Home;
