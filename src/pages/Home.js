import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log(response.data);
      setCountries(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="countries">
      {countries.map((country) => {
        return <Card key={country.name} country={country} />;
      })}
    </div>
  );
}

export default Home;
