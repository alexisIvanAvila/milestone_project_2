import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";

const baseURL = process.env.REACT_APP_RANDOM_URL

function Random (props) {
    const [post, setPost] = useState(null);
    const [favorited, setFavorited] = useState(() => {})
    let [text, setText] = useState();
    let [flag, setFlag] = useState(false);
    let [color, setColor] = useState("primary")

    // function addFav () {
    //   axios.post(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${post.meals[0].idMeal}&category=${post.meals[0].strCategory}`)
    // }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      console.log(response.data)
      axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`).then((included) =>{
        function changeFave() {
            if (flag) {
              axios.post(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${response.data.meals[0].idMeal}&category=${response.data.meals[0].strCategory}`)
            setText('Delete From Favorites')
            setColor('danger')
            setFlag(false)
            } else {
              axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${response.data.meals[0].idMeal}&category=${response.data.meals[0].strCategory}`)
            setText('Add To Favorites')
            setColor('primary')
            setFlag(true)
          }
        }
        setFavorited(changeFave)
        if (included.data.rows.includes(toString(response.data.meals[0].idMeal))){
          setText('Add To Favorites')
          setColor('primary')
          setFlag(true)
        } else {
          setText('Delete From Favorites')
          setColor('danger')
          setFlag(false)
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
            <Button variant={color} onClick={favorited} >{text}</Button>
            </div>
        </div>
    )
}

export default Random