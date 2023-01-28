import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = process.env.REACT_APP_RANDOM_URL

function Random () {
    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
    });
  }, []);

  if (!post) return null;

    return (
        <div>
            <h2>{post.meals[0].strMeal}</h2>
            <img src={post.meals[0].strMealThumb}></img>
            <div>
                <p className='paragraph' style={{color: 'white', width: '75%'}}>{post.meals[0].strInstructions}</p>
            </div>
        </div>
    )
}

export default Random