import React from 'react'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            salad  : 1,
            meat : 2,
            cheese : 0,
            cheese: 3
        }
    }

    render() {
        return (
            <>
            <Burger ingredients={this.state.ingredients} />
            <div> Build controls</div>
            </>
        )
    }

}


export default BurgerBuilder