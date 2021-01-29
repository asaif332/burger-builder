import React from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

const pricesData = {
    meat : 10,
    bacon : 7.5,
    salad : 6,
    cheese : 14
}

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            salad  : 0,
            meat : 0,
            cheese : 0,
            bacon : 0
        },
        price : 0
    }

    increase = (type) => {
        const newIng = {
            ...this.state.ingredients,
            [type] : this.state.ingredients[type] + 1
        }

        this.setState({
            ingredients : newIng,
            price : this.state.price + pricesData[type]
        })
    }

    decrease = (type) => {

        if (this.state.ingredients[type] > 0) {
            const newIng = {
                ...this.state.ingredients,
                [type] : this.state.ingredients[type] - 1
            }
            this.setState({
                ingredients : newIng,
                price : this.state.price - pricesData[type]
            })
        }

    }

    render() {
        return (
            <div>
            <Burger price={this.state.price} ingredients={this.state.ingredients} />
            <BurgerControls increase={this.increase} decrease={this.decrease} />
            </div>
        )
    }

}


export default BurgerBuilder