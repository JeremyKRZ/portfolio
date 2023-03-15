import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio de Jeremy KRZECZOWSKI
        </p>
        <div className="link-nav">
          <a className="home-link linkedin" href="https://www.linkedin.com/in/jeremy-krzeczowski-91429a1bb/" target="_blank" rel="noopener noreferrer"></a>
          <a className="home-link github" href="https://github.com/JeremyKRZ/" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </header>
    </div>
  );
}

export default App;
