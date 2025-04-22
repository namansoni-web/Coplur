import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {

  let name = "React project";
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Footer/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {name}
          {25*8}

      </header>
    </div>
  );
}

export default App;
