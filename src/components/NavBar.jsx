import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div>
            <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
                <Link to="/" >Home</Link>
            </Nav.Item>
          </Nav>
        </div>
    )
}

export default NavBar