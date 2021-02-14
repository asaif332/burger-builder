import { Button, ListGroupItem } from "react-bootstrap"
import classes from "./BurgerControl.module.css"

const BurgerControl = (props) => {

    return (
        <ListGroupItem className={classes.BurgerControl}>
            <p>{ props.ingredient.title }</p>
            <p></p>
            <p>
                <Button variant="success" size="sm" onClick={props.increase}>more</Button>
                <Button variant="danger" size="sm" onClick={props.decrease}>less</Button>
            </p>
        </ListGroupItem>
    )
}

export default BurgerControl