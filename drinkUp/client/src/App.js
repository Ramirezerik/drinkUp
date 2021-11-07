// import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import NewBar from './components/NewBar';
import AllBars from './components/AllBars';
import BarDetails from './components/BarDetails';
import EditBar from './components/EditBar';

function App() {
  return (
    <div className="App">
      <Router>
        <AllBars path ="/"/>
        <NewBar path ="/new"/>
        <EditBar path="/edit/:id"/>
        <BarDetails path ="/details/:id"/>
      </Router>
    </div>
  );
}

export default App;
