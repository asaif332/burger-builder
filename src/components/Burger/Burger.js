import classes from './Burger.module.css'
import React from 'react'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const Burger = (props) => {

    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((key, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, element) => {
        return arr.concat(element);
    } , []);

    if (ingredients.length === 0) {
        ingredients = "Add Some Ingredients"
    }

    return (
        <>
        <h5>Total price - ${ props.price }</h5>
        <br />
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { ingredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
        </>
    )
}

export default Burger