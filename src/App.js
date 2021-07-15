import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import End from './End/End';

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="bodymain">
        <Body />
      </div>
      <div className="endpage">
        <End />
      </div>
    </div>
  );
}

export default App;
