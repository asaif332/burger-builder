import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import CheckoutContainer from '../../containers/Checkout/CheckoutContainer'
import Orders from '../../containers/Orders/Orders'
import Topbar from "../Navigation/Topbar/Topbar"

const Layout = (props) => {

  return (
    <Container fluid>
      <Topbar />
      <div style={{ marginTop: "54px" }}></div>
      <Switch>
        <Route path="/checkout" component={CheckoutContainer} />
        <Route path="/my-orders" component={Orders} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </Container>
  )
}

export default Layout