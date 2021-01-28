import React from "react";

function Card({ country }) {
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <div className="card">
      <div className="country">
        <img
          src={country.flag}
          alt="flag"
          style={{
            width: 200,
            height: 130,
            objectFit: "cover",
            borderRadius: 5,
          }}
        />
        <div className="overlay">
          <p>capital :{country.capital}</p>
          <p>région : {country.region}</p>
          <p>population : {numberFormat(country.population)}</p>
        </div>
      </div>
      <p className="country-name">{country.name}</p>
    </div>
  );
}

export default Card;
