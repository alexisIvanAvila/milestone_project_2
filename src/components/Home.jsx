import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function Home () {
    return (
        <div>
            <h1>Welcome to the App!</h1>
            <div className="homebttns">
                <Link to='/beef'>
                    <Button variant="warning">Beef</Button>{''}
                </Link>
                <Link to="/vegetarian">
                    <Button variant="warning">Vegetarian</Button>{''}
                </Link>
                <Link to="/seafood">
                    <Button variant="warning">Seafood</Button>{''}
                </Link>
                <Link to="/breakfast">
                    <Button variant="warning">Breakfast</Button>{''}
                </Link>
                <Link to="/random">
                    <Button variant="warning">Random</Button>{''}
                </Link>
                </div>
        </div>
    )
}

export default Home