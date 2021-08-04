import React, { useEffect } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../redux/actions/PokemonAction';
import _ from 'lodash';
import './Pokemon.css';

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [dispatch, pokemonName])

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokemonData = pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <Row>
              <Col className="col-normal">
                <h1>Normal</h1>
                <Image src={pokemonData.sprites.front_default} alt="" />
                <Image src={pokemonData.sprites.back_default} alt="" />
              </Col>

              <Col className="col-shiny">
                <h1>Shiny</h1>
                <Image src={pokemonData.sprites.front_shiny} alt="" />
                <Image src={pokemonData.sprites.back_shiny} alt="" />
              </Col>
            </Row>

            <Row>
              <Col>
                <h1>Stats</h1>
                {pokemonData.stats.map((element) => {
                  return (
                    <p>{element.stat.name} {element.base_stat}</p>
                  )
                })}
              </Col>

              <Col>
                <h1>Abilities</h1>
                {pokemonData.abilities.map((element) => {
                  return (
                    <p>{element.ability.name}</p>
                  )
                })}
              </Col>

            </Row>

          </div>
        </div>
      )
    }


    if (pokemonState.loading)
      return <p>Loading...</p>

    if (pokemonState.errorMessage !== "")
      return <p>{pokemonState.errorMessage}</p>
  }

  return (
    <div>
      {showData()}
    </div>
  )
};

export default Pokemon;