import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Random from './components/Random';
import Food from './components/Food';
import BaseFoodSelection from './components/BaseFoodSelection';

function App() {
  return (
    <div className="App">
      <Router>
          <div>
          <NavBar />         
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/vegetarian' element={<BaseFoodSelection foodType="Vegetarian" />}/>
            <Route exact path='/beef' element={<BaseFoodSelection foodType="Beef" />}/>
            <Route exact path='/chicken' element={<BaseFoodSelection foodType="Chicken" />}/>
            <Route exact path='/breakfast' element={<BaseFoodSelection foodType="Breakfast" />}/>
            <Route exact path='/seafood' element={<BaseFoodSelection foodType="Seafood" />}/>
            <Route exact path='/dessert' element={<BaseFoodSelection foodType="Dessert" />}/>
            <Route exact path='/pork' element={<BaseFoodSelection foodType="Pork" />}/>
            <Route exact path='/side' element={<BaseFoodSelection foodType="Side" />}/>
            <Route exact path='/random' element={<Random/>} />
            <Route path='/food/:id' element={<Food/>} />
          </Routes>
          </div>
        </Router>
        <div></div>
    </div>
  );
}

export default App;
