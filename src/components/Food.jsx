import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

function Food () {
    let {id} = useParams()
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id).then((response) => {
            setPost(response.data)
            console.log(response.data)
        });
      }, []);
    
      if (!post) return null;

    return (
        <div>
        <h1>Your Selected recipe is {post.meals[0].strMeal}</h1>
        <img src={post.meals[0].strMealThumb}></img>
        </div>
    )
}

export default Food