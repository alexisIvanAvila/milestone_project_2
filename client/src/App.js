import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Random from './components/Random';
import Food from './components/Food';
import BaseFoodSelection from './components/BaseFoodSelection';
import Favorites from './components/Favorites';
import { useEffect, useState } from 'react';

function App() {

  let [token, setToken] = useState('')

useEffect(() => {
  let retrievedObject = localStorage.getItem('tokenString');
  console.log(retrievedObject)
  if(retrievedObject === null){
  let tokenGen = Math.floor(Math.random() * 10001);
  let tokenString = tokenGen.toString()
  console.log(tokenString)
  localStorage.setItem('tokenString', tokenString)
  setToken(tokenString)
  } else {
    setToken(retrievedObject)
  }
}, [])

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
            <Route exact path='/random' element={<Random token={token}/>} />
            <Route path='/food/:id' element={<Food token={token}/>} />
            <Route exact path='/favorites' element={<Favorites token={token}/>} />
          </Routes>
          </div>
        </Router>
        <div></div>
    </div>
  );
}

export default App;
