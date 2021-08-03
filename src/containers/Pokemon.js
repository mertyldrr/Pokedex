import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../redux/actions/PokemonAction';

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  console.log(pokemonName);
  console.log("props", props);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [dispatch, pokemonName])

  return (
    <div>
      <Button variant="warning">{pokemonName}</Button>
    </div>
  )
};

export default Pokemon;