import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";

function Food (props) {
    let {id} = useParams()
    
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_ITEM_URL + id).then((response) => {
            setPost(response.data)
            console.log(response.data)
        });
      }, []);
    
      if (!post) return null;

    return (
        <div>
        <h1>{post.meals[0].strMeal}</h1>
        <img className="foodImg" src={post.meals[0].strMealThumb}></img>
            <div>
                <p className='paragraph' style={{color: 'white', width: '75%'}}>{post.meals[0].strInstructions}</p>
            </div>
        </div>
    )
}

export default Food