import { ListGroup, ListGroupItem, Image } from "react-bootstrap";

const SinglePokemon = (props) => {

  return (
    <ListGroup>
      <ListGroupItem action href={`/pokemon/${props.name}`} variant="success">{props.name}
        <div>
          <Image src={props.sprite} alt="" />
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}

export default SinglePokemon;
