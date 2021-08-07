import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import {
  normal, fire, water, grass, flying, fighting,
  poison, electric, ground, rock, psychic, ice,
  bug, ghost, steel, dragon, dark, fairy
} from '../constants/pokemonTypeColours';

const SinglePokemon = (props) => {

  const pickColor = (type) => {
    let color = "";
    switch (type) {
      case "grass":
        color = grass
        break;
      case "water":
        color = water
        //color = "#4592c4b3"
        break;
      case "fire":
        color = fire
        // color = "#fd7d24ad";
        break;
      case "electric":
        color = electric
        break;
      case "flying":
        color = flying
        break;
      case "fighting":
        color = fighting
        break;
      case "psychic":
        color = psychic
        break;
      case "rock":
        color = rock
        break;
      case "normal":
        color = normal
        break;
      case "poison":
        color = poison
        break;
      case "bug":
        color = bug
        //color = "#729f3fbd"
        break;
      case "fairy":
        color = fairy
        break;
      case "ground":
        color = ground
        break;
      case "steel":
        color = steel
        break;
      case "ghost":
        color = ghost
        break;
      case "ice":
        color = ice
        break;
      case "dragon":
        color = dragon
        break;
      case "dark":
        color = dark
        break;
      default:
        return
    }
    return color;
  }

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
