import React, { useState, useEffect } from "react";
import Header from "./compponents/Header";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [refr, setRefr] = useState(1);
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  function refresh() {
    setCountries([]);
    setRefr((refresh) => refresh + 1);
  }
  useEffect(() => {
    async function fetchData() {
      const co = await fetch("https://restcountries.com/v2/regionalbloc/asean");
      const data = await co.json();
      const co1 = await fetch(
        "https://restcountries.com/v2/regionalbloc/saarc"
      );
      const data1 = await co1.json();
      const final = data.concat(data1);
      setCountries([...countries, ...final]);
    }
    fetchData();
  }, [refr]);
  return (
    <div>
      <Header />
      {countries.length !== 0 ? (
        <span className="refresh-btn" onClick={refresh}>
          Refresh Data
        </span>
      ) : null}
      <div className="data-container">
        {countries.length !== 0
          ? countries.map((country) => {
              return (
                <div className="item-container">
                  <div className="name-country">{country.name}</div>
                  <div>{country.capital}</div>
                  <img
                    src={country.flags[0]}
                    alt="flag"
                    width="200"
                    height="100"
                    className="image-flag"
                  />
                  <div className="region-sub">
                    <div className="region">
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        Region
                      </span>
                      <div>{country.region}</div>
                    </div>
                    <div className="subregion">
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        Subregions
                      </span>
                      <div>...</div>
                    </div>
                  </div>
                  <div>
                    Population{" "}
                    <span style={{ color: "green" }}>{country.population}</span>{" "}
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <span style={{ color: "black", fontWeight: "500" }}>
                      Borders -
                    </span>
                    {country.borders
                      ? country.borders.map((e) => {
                          return <span> {e}, </span>;
                        })
                      : "..."}
                  </div>
                  <div className="region-sub">
                    <div className="region">
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        Language
                      </span>
                      <div>{country.languages[0].name}</div>
                    </div>
                    <div className="subregion">
                      <span
                        style={{
                          fontSize: "15px",
                          color: "black",
                          fontWeight: "700",
                        }}
                      >
                        Native name
                      </span>
                      <div>{country.languages[0].nativeName}</div>
                    </div>
                  </div>
                </div>
              );
            })
          : dummy.map(() => {
              return (
                <div className="item-container1">
                  <div className="name-country">name</div>
                  <div>capital</div>
                  <img
                    src=""
                    alt="flag"
                    width="200"
                    height="100"
                    className="image-flag"
                  />
                  <div className="region-sub">
                    <div className="region">
                      <span>Region</span>
                      <div>name</div>
                    </div>
                    <div className="subregion">
                      <span>Subregions</span>
                      <div>name</div>
                    </div>
                  </div>
                  <div>
                    Population <span>name</span>{" "}
                  </div>
                  <div>
                    Borders <span>name</span>{" "}
                  </div>
                  <div className="region-sub">
                    <div className="region">
                      <span>Language</span>
                      <div>name</div>
                    </div>
                    <div className="subregion">
                      <span>Native language</span>
                      <div>name</div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
