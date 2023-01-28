import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item style={{marginBottom: '25px', marginTop: '10px'}}>
                <Link to="/" className="navBar">Home</Link>
                <Link to="/favorites" className="navBar">Favorites</Link>
            </Nav.Item>
          </Nav>
        </div>
    )
}

export default NavBar