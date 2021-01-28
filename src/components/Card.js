import React from "react";

function Countries({ country }) {
  return (
    <>
      <div className="card">
        <img
          src={country.flag}
          alt="flag"
          style={{ width: 200, height: 130, objectFit: "cover" }}
        />
        <div>
          <p>capital :{country.capital}</p>
          <p>région : {country.region}</p>
          <p>population : {country.population}</p>
        </div>
      </div>
      <p>{country.name}</p>
    </>
  );
}

export default Countries;
