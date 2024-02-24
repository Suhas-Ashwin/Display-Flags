import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((dta) => setData(dta));
    } catch (error) {
      console.error("Unable to fetch data", error);
    }
  }, [data]);

  return (
    <div className="container">
      {data.map((country) => {
        return (
          <div key={country.ccn3} className="card">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="flag-img"
            />
            <h3> {country.name.common} </h3>
          </div>
        );
      })}
    </div>
  );
}
