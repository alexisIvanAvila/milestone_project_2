import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = process.env.REACT_APP_BASE_URL + "Breakfast"

function Breakfast () {
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
            <h2>this is the breakfast page</h2>
            <img src={post.meals[0].strMealThumb}></img>
        </div>
    )
}

export default Breakfast