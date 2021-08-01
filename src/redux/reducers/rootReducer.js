import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer
});

export default rootReducer;