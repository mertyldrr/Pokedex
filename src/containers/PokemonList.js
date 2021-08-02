import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetPokemonList, GetSpecificPokemon } from '../redux/actions/PokemonAction';
import { Button } from 'react-bootstrap';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);

  useEffect(() => {
    const fetchData = (page = 1) => {
      dispatch(GetPokemonList(page));
      dispatch(GetSpecificPokemon("bulbasaur"));
    }
    fetchData();
  }, [dispatch]);


  const showData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="pokemon-list-wrapper">
          {pokemonList.data.map((pokemon, index) => {
            return (
              <div className="pokemon-list-element" key={index}>
                <ListGroup>
                  <ListGroupItem action href={`/pokemon/${pokemon.name}`} variant="success">{pokemon.name}
                    <Button style={{ float: "right" }}>Test</Button>
                  </ListGroupItem>
                </ListGroup>
              </div>
            )
          })}
        </div>
      )
    }

    if (pokemonList.loading) {
      return <p>Loading...</p>
    }

    if (pokemonList.errorMessage !== "") {
      return <p>{pokemonList.errorMessage}</p>
    }
  };
  return (
    <div>
      {showData()}
    </div>
  )
};

export default PokemonList;