import logo from './logo.svg';
import './App.css';
import { Container } from './components/details/container';
import { Nav } from "./components/master/navigation/navigation";

function App() {
  return (
    <div className="App">
      <header className="main-header">
      Header
      </header>
       <Nav />
       <Container />
    </div>
  );
}

export default App;
