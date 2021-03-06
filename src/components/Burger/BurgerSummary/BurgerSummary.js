import React from 'react'
import { Button, ListGroup, Modal } from "react-bootstrap";
import { withRouter } from 'react-router-dom';

function BurgerSummary(props) {

  const goToCheckout = () => {
    if (props.data.price == 0) {
      alert("Please add some ingredients first!")
    }
    else {
      let queryArr = []
      for (let ing in props.data.ingredients) {
        queryArr.push(ing + "=" + props.data.ingredients[ing])
      }
      queryArr.push("price=" + props.data.price)
      props.history.push("/checkout?" + queryArr.join("&"))
    }
  }

  console.log('burger summary')
  return (
    <>
      <Modal
        show={props.data.summary}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Burger Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush">
            {Object.keys(props.data.ingredients).map(item => (
              <ListGroup.Item key={item} className="d-flex">
                <span className="text-capitalize" >{item}</span> <span className="flex-grow-1"></span>  { props.data.ingredients[item]}
              </ListGroup.Item>
            ))}

            <ListGroup.Item key="price" className="d-flex">
              <span className="text-capitalize" >Total price</span> <span className="flex-grow-1"></span>  ${props.data.price}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={goToCheckout}>
            Order
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default React.memo(withRouter(BurgerSummary), function (prev, next) {
  return prev.data.summary === next.data.summary
})