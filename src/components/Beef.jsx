import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = process.env.REACT_APP_BASE_URL + "Beef"

function Beef () {
    const [post, setPost] = useState(null);

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
            <h2>this is the beef page</h2>
            <ul>
                {imgArr.map((item, index) => <li key={index}><button className="imgbutton"><img src={item} onClick={() =>{}}></img></button></li>)}
            </ul>
        </div>
    )
}
export default Beef