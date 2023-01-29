import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Favorites (props) {
    const [post, setPost] = useState(null);
    const [img, setImg] = useState([])
    const [mealArr, setMealArr] = useState([])
    const baseURL = process.env.REACT_APP_ITEM_URL

  useEffect(() => {
    async function fetchData () {
    let included = await axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`)
       let imgs = [] 
       console.log(included)
       let mealId = []
       for (let i = 0; i < included.length; i++) {
        let results = await axios.get(baseURL + included[i])
        imgs.push(results.data.meals[0].strMealThumb)
        mealId.push(results.data.meals[0].idMeal)
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
                  {img.map((item, index) => <li key={index}><Link to={'/favorites/' + mealArr[img.indexOf(item)]} className="imgLink"><img className="imgbutton" src={item}></img></Link></li>)}
              </ul>
            </div>
        </div>
    )
}
export default Favorites