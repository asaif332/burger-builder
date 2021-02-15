import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const Topbar = (props) => {

  return (
    <Navbar expand="sm" variant="dark" bg="info" fixed="top">
      <Navbar.Brand href="/">Burger</Navbar.Brand>
      <Navbar.Toggle aria-controls="mynavbar" />
      <Navbar.Collapse id="mynavbar">
        <Nav className="ml-auto">
          <Link to="/my-orders" className="text-white">my orders</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Topbar