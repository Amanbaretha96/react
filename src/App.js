
import './App.css';
import Dadcomponent from './component/dadcomponent';
// import Fathercomponent from './component/fathercomponent';
// import Parent from './component/parent';
// import Diamond from './component/diamond';
// import Fifthcomponent from './component/fifthcomponent';
// import Hadder from './component/hadder';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Diamond/> */}
      <Dadcomponent/>
     {/* <Hadder/> */}
     {/* <Parent/> */}
      {/* <Fifthcomponent/> */}
      {/* <Fathercomponent/> */}
    </div>
  );
}

export default App;
