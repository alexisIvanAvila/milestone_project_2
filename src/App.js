import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vegetarian from './components/Vegetarian';
import Beef from './components/Beef';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breakfast from './components/Breakfast';
import Seafood from './components/Seafood';
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
          <NavBar />         
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/vegetarian' element={<Vegetarian/>}/>
            <Route exact path='/beef' element={<Beef/>}/>
            <Route exact path='/breakfast' element={<Breakfast/>}/>
            <Route exact path='/seafood' element={<Seafood/>} />
            <Route exact path='/random' element={<Random/>} />
          </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
