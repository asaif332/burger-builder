import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'

const Layout = (props) => {

    return (
        <Container fluid>
            <Navbar variant="dark" bg="info" fixed="top">
                <Navbar.Brand href="#">Burger</Navbar.Brand>
            </Navbar>
            <BurgerBuilder />
        </Container>
    )
}

export default Layout