import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "react-bootstrap"

function Favorites (props) {
    let [favorites, setFavorites] = useState([])
    useEffect(() =>{
        axios.get(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}`).then((response) => {
            setFavorites(response.data.rows)
            console.log(response.data.rows)
        })
    })

    return (
        <div>
            <h1> this is the fav page</h1>
            <Button variant="danger" onClick={() => {
                axios.delete(process.env.REACT_APP_SERVER_URL + `favorites?token=${props.token}&apiId=${response.data.meals[0].idMeal}&category=${response.data.meals[0].strCategory}`)
            }}>Delete</Button>
        </div>
    )
}

export default Favorites