import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

const baseURL = process.env.REACT_APP_RANDOM_URL

function Random (props) {
    const [post, setPost] = useState(null);
    const [favorited, setFavorited] = useState('')

    // function addFav () {
    //   axios.post(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${post.meals[0].idMeal}&category=${post.meals[0].strCategory}`)
    // }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
      axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`).then((included) =>{
        if (included.data.includes(response.data.meals[0].idMeal)){
          setFavorited(<p>This is in your Favorites!</p>)
        } else {
          function addFav () {
            axios.post(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${response.data.meals[0].idMeal}&category=${response.data.meals[0].strCategory}`)
          }
          setFavorited(<Button variant="primary" onClick={addFav} >Add To Favorites</Button>)
        }
      })
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
            <div>
            {favorited}
            </div>
        </div>
    )
}

export default Random