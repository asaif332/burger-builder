import React from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary'

const pricesData = {
  meat: 10,
  bacon: 7.5,
  salad: 6,
  cheese: 14
}

class BurgerBuilder extends React.Component {

  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    price: 0,
    summary: false
  }

  increase = (type) => {
    const newIng = {
      ...this.state.ingredients,
      [type]: this.state.ingredients[type] + 1
    }

    this.setState(prevState => ({
      ingredients: newIng,
      price: prevState.price + pricesData[type]
    }))
  }

  decrease = (type) => {

    if (this.state.ingredients[type] > 0) {
      const newIng = {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type] - 1
      }
      this.setState((prevState) => ({
        ingredients: newIng,
        price: prevState.price - pricesData[type]
      }))
    }

  }


  render() {

    return (
      <>
        <Row>
          <Col lg={6}>
            <Burger price={this.state.price} ingredients={this.state.ingredients} />
          </Col>
          <Col lg={6}>
            <BurgerControls
              increase={this.increase}
              decrease={this.decrease}
              handleOpen={() => this.setState({ summary: true })}
            />
          </Col>
        </Row>
        <BurgerSummary data={this.state} handleClose={() => this.setState({ summary: false })} />
      </>
    )
  }

}


export default BurgerBuilder