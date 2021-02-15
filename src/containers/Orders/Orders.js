import { useEffect, useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import axiosInstance from "../../axios-instance"

function Orders(props) {

  const [orders , setOrders] = useState([])

  useEffect(() => {

    axiosInstance.get("/orders.json" , {})
      .then(res => {
        let fetchedOrders = []
        if (res.status == 200) {
          const data = res.data
          for (let order in data) {
            fetchedOrders.push({
              ...data[order],
              id : order
            })
          }

          console.log('orders' , fetchedOrders)
          setOrders(fetchedOrders)
        }
      })
      .catch(err => {
        console.log("err" , err)
      })

  } , [])

  return (
    <div className="text-left">
      <Accordion>
        {
          orders.map((order, index) => {
            return (
              <Card key={order.id}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" className="text-dark" eventKey={index+1}>
                    {order.user.name + " " + order.id }
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index+1}>
                  <Card.Body>
                    <p>Phone : {order.user.phone }</p>
                    <p>Address : { order.user.address }</p>
                    <p> Ingredients : { JSON.stringify(order.ingredients) }</p>
                    <p>Total price : ${order.price}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })
        }
      </Accordion>
    </div>
  )
}

export default Orders