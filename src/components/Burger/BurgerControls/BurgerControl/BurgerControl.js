import classes from "./BurgerControl.module.css"

const BurgerControl = (props) => {

    return (
        <div className={classes.BurgerControl}>
            <p>{ props.ingredient.title }</p>
            <p>
                <button onClick={props.increase}>more</button>
                <button onClick={props.decrease}>less</button>
            </p>
        </div>
    )
}

export default BurgerControl