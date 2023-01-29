import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Favorites (props) {
    const [img, setImg] = useState([]);
    const [mealArr, setMealArr] = useState([]);
    const [deleter, setDeleter] = useState([]);
    let [token, setToken] = useState('')
   
   
    const baseURL = process.env.REACT_APP_ITEM_URL

   

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

  useEffect(() => {
    async function fetchData () {
    let included = await axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${token}`)
       let imgs = [] 
       console.log(included)
       included = included.data.rows
       let mealId = []
       for (let i = 0; i < included.length; i++) {
        let results = await axios.get(baseURL + included[i]['apiid'])
        imgs.push(results.data.meals[0].strMealThumb)
        mealId.push(results.data.meals[0].idMeal)
        
        function deleteFav () {
            axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${token}&apiId=${results.data.meals[0].idMeal}`)
      }
      deleter.push(<Button variant="danger" onClick={() => {deleteFav; window.location.reload(false)}} >Delete From Favorites</Button>)
      setDeleter(deleter)
    }
       setImg(imgs)
       setMealArr(mealId)
       console.log(imgs)
       console.log(mealId)

 } fetchData()
  }, []);

    return (
        <div>
            <div>
              <h2>Favorites</h2>
            </div>
            <div className="apiImg">
              <ul>
                  {img.map((item, index) => <li key={index}><Link to={'/food/' + mealArr[img.indexOf(item)]} className="imgLink"><img className="imgbutton" src={item}></img></Link>{deleter[index]}</li>)}
              </ul>
            </div>
        </div>
    )
}
export default Favorites