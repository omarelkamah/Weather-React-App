import axios from "axios";
import { useRef, useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();
  const inputRef = useRef();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5a579b20562b4e526046b4d05ac3d56e`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const searchButton = () => {
    setLocation(inputRef.current.value);
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    inputRef.current.value = "";
  };
  return (
    <div className="App">
      <Search
        refForInput={inputRef}
        location={location}
        searchButton={searchButton}
        search={search}
      />
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : ""}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : ""}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed()}°F</p>
            ) : (
              ""
            )}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? (
              <p className="bold">{data.main.humidity.toFixed()}%</p>
            ) : (
              ""
            )}
            <p>humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : ""}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
