import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Card from "./components/Card"


function App() {
  return (
    <div className="App">
    <NavBar />    
      <header className="App-header">      
      </header>
      
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
