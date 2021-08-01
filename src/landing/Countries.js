import React from "react";
import { Link } from "react-router-dom";
import "./Countries.scss";

function Countries() {
  const countries = [
    { name: "United States", id: 1 },
    { name: "Canada", id: 2 },
    { name: "Spain", id: 3 },
    { name: "Australia", id: 4 },
    { name: "Brazil", id: 5 },
    { name: "Poland", id: 6 },
    { name: "Mexico", id: 7 },
    { name: "United Kingdom", id: 8 },
    { name: "France", id: 9 },
    { name: "Italy", id: 10 },
    { name: "Japan", id: 11 },
    { name: "Portugal", id: 12 },
  ];
  return (
    <div className="countries">
      <span>Countries with Uber Eats</span>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.id}>
              <Link>{country.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Countries;
