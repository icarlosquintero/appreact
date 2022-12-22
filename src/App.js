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
        <div>
          <Card />
          <Button />
        </div>
        <div>
          <Card />
          <Button />
        </div>
      </header>
    </div>
  );
}

export default App;
