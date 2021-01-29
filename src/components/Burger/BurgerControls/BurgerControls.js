import classes from "./BurgerControls.module.css"
import BurgerControl from "./BurgerControl/BurgerControl"
import { ListGroup } from "react-bootstrap"

const ingredients = [
    {
        title : "Cheese",
        type : "cheese"
    },
    {
        title : "Meat",
        type : "meat"
    },
    {
        title : "Bacon",
        type : "bacon"
    },
    {
        title : "Salad",
        type : "salad"
    }
]

const BurgerControls = (props) => {

    return (
        <div className={classes.BurgerControls}>
            <ListGroup  >
            {ingredients.map(ingredient => {
                return(
                    <BurgerControl 
                        key={ingredient.type} 
                        ingredient={ingredient} 
                        increase={() => props.increase(ingredient.type)}
                        decrease={() => props.decrease(ingredient.type)}
                    />
                )
            })}
            </ListGroup>
        </div>
    )
}

export default BurgerControls