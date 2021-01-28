import classes from './Burger.module.css'
import React from 'react'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import { element } from 'prop-types'

const Burger = (props) => {

    let myIngredients = [];

    for (const key in props.ingredients) {
        
    }

    const ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((key, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, element) => {
        return arr.concat(element);
    } , [])

    console.log('ingredients' , Object.keys(props.ingredients))

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { ingredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger