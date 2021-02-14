import React from 'react'
import { Container } from 'react-bootstrap'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import Topbar from "../Navigation/Topbar/Topbar"

const Layout = (props) => {

    return (
        <Container fluid>
            <Topbar />
            <BurgerBuilder />
        </Container>
    )
}

export default Layout