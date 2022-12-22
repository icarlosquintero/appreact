import logo from "./logo.svg";
import "./App.css";
import "./components/Card";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div>
          <Card />
          <Button />
        </div>
      </header>
    </div>
  );
}

export default App;
