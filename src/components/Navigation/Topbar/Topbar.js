import { Nav, Navbar } from "react-bootstrap"

const Topbar = (props) => {

    return (
        <Navbar expand="sm" variant="dark" bg="info" fixed="top">
            <Navbar.Brand href="#">Burger</Navbar.Brand>
            <Navbar.Toggle aria-controls="mynavbar" />
            <Navbar.Collapse id="mynavbar">
                <Nav className="ml-auto">
                <Nav.Link href="#">Checkout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Topbar