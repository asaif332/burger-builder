import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function NoIngredients(props) {

  return (
    <div>
      <h4>No Ingredients Added ?</h4>
      <Button variant="info" onClick={() => props.history.replace("/")}>
        go back
      </Button>
    </div>
  )
}

export default withRouter(NoIngredients)


