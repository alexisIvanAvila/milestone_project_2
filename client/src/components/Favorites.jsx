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

   

    // useEffect(() => {
    //   let retrievedObject = localStorage.getItem('tokenString');
    //   console.log(retrievedObject)
    //   if(retrievedObject === null){
    //   let tokenGen = Math.floor(Math.random() * 10001);
    //   let tokenString = tokenGen.toString()
    //   console.log(tokenString)
    //   localStorage.setItem('tokenString', tokenString)
    //   setToken(tokenString)
    //   } else {
    //     setToken(retrievedObject)
    //   }
    // }, [])

    async function fetchData () {
        let included = await axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`)
           let imgs = []
           let mealId = []
           console.log(included)
           included = included.data.rows
           
           for (let i = 0; i < included.length; i++) {
            let results = await axios.get(baseURL + included[i]['apiid'])
            imgs.push(results.data.meals[0].strMealThumb)
            mealId.push(results.data.meals[0].idMeal)
            
        //     function deleteFav () {
        //         axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${results.data.meals[0].idMeal}`)
        //   }
        //   deleter.push(<Button variant="danger" onClick={deleteFav} >Delete From Favorites</Button>)
        //   setDeleter(deleter)
        }
           setImg(imgs)
           setMealArr(mealId)
           console.log(imgs)
           console.log(mealId)
    
     }

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

//     async function fetchData () {
//     let included = await axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`)
//        let imgs = []
//        let mealId = []
//        console.log(included)
//        included = included.data.rows
       
//        for (let i = 0; i < included.length; i++) {
//         let results = await axios.get(baseURL + included[i]['apiid'])
//         imgs.push(results.data.meals[0].strMealThumb)
//         mealId.push(results.data.meals[0].idMeal)
        
//     //     function deleteFav () {
//     //         axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${results.data.meals[0].idMeal}`)
//     //   }
//     //   deleter.push(<Button variant="danger" onClick={deleteFav} >Delete From Favorites</Button>)
//     //   setDeleter(deleter)
//     }
//        setImg(imgs)
//        setMealArr(mealId)
//        console.log(imgs)
//        console.log(mealId)

//  } 
    fetchData()
  }, []);

  function deleteFav (id) {
    axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${id}`)

    fetchData();

}

    return (
        <div>
            <div>
              <h2>Favorites</h2>
            </div>
            <div className="apiImg">
              <ul>
                  {img.map((item, index) => <li key={index}><Link to={'/food/' + mealArr[img.indexOf(item)]} className="imgLink"><img className="imgbutton" src={item}></img></Link>
                  <Button variant="danger" onClick={() => deleteFav(mealArr[img.indexOf(item)])}>Delete</Button>
                  </li>)}
              </ul>
            </div>
        </div>
    )
}
export default Favorites