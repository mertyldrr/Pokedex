import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import pickColor from '../helpers/pickColor';

const SinglePokemon = (props) => {

  return (
    <ListGroup>
      <ListGroupItem
        style={{ backgroundColor: pickColor(props.type), color: "white", fontSize: 15, fontWeight: 500 }}
        action href={`/pokemon/${props.name}`}
        variant="success">{props.name}
        <div>
          <Image src={props.sprite} alt="" />
        </div>
      </ListGroupItem>
    </ListGroup>
  )
}

export default SinglePokemon;
