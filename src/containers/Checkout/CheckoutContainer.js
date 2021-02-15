import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import axiosInstance from "../../axios-instance";
import Burger from "../../components/Burger/Burger";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import NoIngredients from "../../components/Checkout/NoIngredients"

function CheckoutContainer (props) { 

  const [data, setData] = useState({ ingredients : {} , price : 0})
  const [user, setUser] = useState({})
  const [isLoading , setIsLoading] = useState(false)
  
  const makeOrder = () => {

    if (Object.keys(data).length == 0) {
      alert("Please make burger first !!")
      return;
    }

    let formValidated = true
    for (let field in user) {
      if (user[field].trim() == "") {
        formValidated = false;
        break;
      }
    }

    if (!formValidated) {
      alert("Please enter all fields !!")
      return ;
    }

    if (user.phone.length != 10) {
      alert("Phone entered is invalid!!")
      return ;
    }


    const postData = {
      ...data,
      user
    }

    setIsLoading(true)

    axiosInstance.post("orders.json" , postData)
      .then(res => {
        // console.log("res" , res)
        // setIsLoading(false)
        props.history.replace("/my-orders")
      })
      .catch(err => {
        console.log("err" , err)
        setIsLoading(false)
      })

  }

  const handleCheckoutInput = (event) => {

    setUser({
      ...user,
      [event.target.name] : event.target.value
    })

  }

  useEffect(() => {
    const params = new URLSearchParams(props.location.search)
    let ing = {}
    let price = 0
    for (let param of params) {
      if (param[0] == "price") {
        price = param[1]
      }
      else if(+param[1] > 0) {
        ing[param[0]] = +param[1]
      }
    }

    setData({
      ingredients : ing,
      price
    })

  } , [])

  useEffect(() => {
    console.log("user data" , user)
  })
  

  return (
    <Row>
      <Col lg="6">
        <Burger price={data.price} ingredients={data.ingredients} />
      </Col>
      <Col lg="6">
        { 
          Object.keys(data.ingredients).length == 0 ? 
          <NoIngredients /> : 
          <CheckoutForm isLoading={isLoading} makeOrder={makeOrder} handleInput={handleCheckoutInput} user={user} /> 
        }
      </Col>
    </Row>
  )
}

export default withRouter(CheckoutContainer)