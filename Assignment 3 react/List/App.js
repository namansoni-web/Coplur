import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Hello from './Hello';
import List from './Assignment 2/List';
import Calculator from './Calculator/Calculator';


function App() {

  const students = [
    {
      name: "Amit Sharma",
      hindi: 17,
      english: 2,
      math: 9,
      science: 8
    
    },
    {
      name: "Sneha Verma",
      hindi: 88,
      english: 90,
      math: 95,
      science: 92
    },
    {
      name: "Rahul Mehta",
      hindi: 65,
      english: 70,
      math: 60,
      science: 68
    },
    {
      name: "Priya Singh",
      hindi: 9,
      english: 15,
      math: 13,
      science: 8
    },
    {
      name: "Karan Joshi",
      hindi: 74,
      english: 76,
      math: 80,
      science: 79
    },
    {
      name: "Neha Kapoor",
      hindi: 81,
      english: 84,
      math: 88,
      science: 86
    },
    {
      name: "Rohan Bhatia",
      hindi: 69,
      english: 75,
      math: 72,
      science: 70
    },
    {
      name: "Anjali Desai",
      hindi: 90,
      english: 91,
      math: 89,
      science: 94
    },
    {
      name: "Vikram Nair",
      hindi: 73,
      english: 78,
      math: 85,
      science: 80
    },
    {
      name: "Meena Yadav",
      hindi: 87,
      english: 83,
      math: 90,
      science: 88
    }
  ];
  
  let name = "React project";
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Footer/>
        <Hello/>
        <List data={students}/>
        <Calculator/>
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
