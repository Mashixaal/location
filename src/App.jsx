import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.title}
          <br />
          {data.desc}
          <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {data.cars.map((car) => {
          return (
            <div
              key={car._id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <span>Marque : {car.mark}</span>
              <span>Prix : {car.price}</span>
              <span>Couleur: {car.color}</span>
              <br />
            </div>
          );
        })}
        {console.log(data.cars[4])}

        <div>
        {data.cars[4].mark}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
