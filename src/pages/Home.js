import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
function Home() {
  const [countries, setCountries] = useState([]);
  const [sortedCountries, setSortedCountries] = useState([]);
  const [dataFound, setDataFound] = useState(false);

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
        console.log(countryObj);
        const sortedArray = countryObj.sort(function (a, b) {
          return b.population - a.population;
        });
        console.log(sortedArray);
        setSortedCountries(sortedArray);
      };
      sortedCountry();
    }
  }, [dataFound]);

  return (
    <div className="countries">
      {sortedCountries.map((country) => {
        return <Card key={country.name} country={country} />;
      })}
    </div>
  );
}

export default Home;
