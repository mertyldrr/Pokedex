import {
  normal, fire, water, grass, flying, fighting,
  poison, electric, ground, rock, psychic, ice,
  bug, ghost, steel, dragon, dark, fairy
} from '../constants/PokemonTypeColours';

const PickColor = (type) => {
  let color = "";
  switch (type) {
    case "grass":
      color = grass
      break;
    case "water":
      color = water
      break;
    case "fire":
      color = fire
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

export default PickColor;