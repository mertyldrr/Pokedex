import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonMultipleReducer from './PokemonMultipleReducer';

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonMultipleReducer
});

export default rootReducer;