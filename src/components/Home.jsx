import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import img from "./assets/food.jpg"

function Home () {
    return (
        <div>
            <h1 className='title' style={{fontWeight: '800'}}>Anyone Can Cook</h1>
            <div className="homebttns">
                <Link to="/breakfast">
                    <Button className="homebttn" variant="warning">Breakfast</Button>{''}
                </Link>
                <Link to='/beef'>
                    <Button className="homebttn" variant="warning">Beef</Button>{''}
                </Link>
                <Link to="/chicken">
                    <Button className="homebttn" variant="warning">Chicken</Button>{''}
                </Link>
                <Link to="/pork">
                    <Button className="homebttn" variant="warning">Pork</Button>{''}
                </Link>
                <Link to="/vegetarian">
                    <Button className="homebttn" variant="warning">Vegetarian</Button>{''}
                </Link>
                <Link to="/seafood">
                    <Button className="homebttn" variant="warning">Seafood</Button>{''}
                </Link>
                <Link to="/dessert">
                    <Button className="homebttn" variant="warning">Dessert</Button>{''}
                </Link>
                <Link to="/side">
                    <Button className="homebttn" variant="warning">Side</Button>{''}
                </Link>
                <Link to="/random">
                    <Button className="homebttn" variant="warning">Random</Button>{''}
                </Link>
                </div>
                <div>
                   <img src={img} style={{width: '100%'}}></img> 
                </div>
        </div>
    )
}

export default Home