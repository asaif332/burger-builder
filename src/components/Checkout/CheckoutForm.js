import { Button, Card, Form, Spinner } from "react-bootstrap";

function CheckoutForm(props) {

  const onSubmit = (event) => {
    console.log('submit')
    event.preventDefault();
    props.makeOrder()
  }

  return (
    <div className="text-left col-sm-8 mx-auto mt-4">
      <Card>
        <Card.Body className="pb-0">
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Your name :</Form.Label>
              <Form.Control onChange={props.handleInput} name="name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone :</Form.Label>
              <Form.Control onChange={props.handleInput} type="number" name="phone" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Address :</Form.Label>
              <Form.Control onChange={props.handleInput} as="textarea" rows="2" name="address" />
            </Form.Group>

            <Form.Group className="text-center">
              <Button variant="success" type="submit" className="px-3" disabled={props.isLoading}>
                { props.isLoading ? <Spinner animation="grow" /> : "Make order" }
              </Button>
            </Form.Group>

          </Form>
        </Card.Body>
      </Card>
    </div>
  )

}

export default CheckoutForm