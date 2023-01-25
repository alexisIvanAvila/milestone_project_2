import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function BaseFoodSelection (props) {
    const [post, setPost] = useState(null);
    const baseURL = process.env.REACT_APP_BASE_URL + props.foodType

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

  let mealArr = []
 let imgArr = []

 for (let i = 0; i < post.meals.length; i++){
  Object.entries(post.meals[i]).forEach(field => {
    if(field[1]){
        if (field[0].startsWith('idMeal')){
          mealArr.push(field[1])
        } else if (field[0].startsWith('strMealThumb')){
            imgArr.push(field[1])
    }
 }})
}
 console.log(mealArr, imgArr)

    return (
        <div>
            <div>
              <h2>{props.foodType}</h2>
            </div>
            <div className="apiImg">
              <ul>
                  {imgArr.map((item, index) => <li key={index}><Link to={'/food/' + mealArr[imgArr.indexOf(item)]} className="imgLink"><img className="imgbutton" src={item}></img></Link></li>)}
              </ul>
            </div>
        </div>
    )
}
export default BaseFoodSelection