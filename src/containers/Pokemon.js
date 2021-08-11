import React, { useEffect } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../redux/actions/PokemonAction';
import PickColor from '../helpers/PickColor';
import Loader from "react-loader-spinner";
import _ from 'lodash';
import './Pokemon.css';

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  const type = useSelector(state => state.Pokemon.data[pokemonName])

  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, [dispatch, pokemonName])

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokemonData = pokemonState.data[pokemonName];
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <Row className="vh-100">
              <Col style={{ backgroundColor: PickColor(type.types[0].type.name) }}>
                <h1>Normal</h1>
                <Image src={pokemonData.sprites.front_default} alt="" />
                <Image src={pokemonData.sprites.back_default} alt="" />
                <h1 className="mt-5">Stats</h1>
                {pokemonData.stats.map((element, index) => {
                  return (
                    <p key={index}><strong>{element.stat.name} {element.base_stat}</strong></p>
                  )
                })}
              </Col>

              <Col style={{ backgroundColor: PickColor(type.types[1] ? type.types[1].type.name : type.types[0].type.name) }}>
                <h1>Shiny</h1>
                <Image src={pokemonData.sprites.front_shiny} alt="" />
                <Image src={pokemonData.sprites.back_shiny} alt="" />
                <h1 className="mt-5"> Abilities</h1>
                {pokemonData.abilities.map((element, index) => {
                  return (
                    <p key={index}><strong style={{ fontSize: 15 }}>{element.ability.name}</strong></p>
                  )
                })}
              </Col>
            </Row>
          </div>
        </div>
      )
    }


    if (pokemonState.loading)
      return (
        <Loader className="d-flex align-items-center justify-content-center"
        type="Circles"
        color="#ffe031"
        height={150}
        width={150}
        timeout={3000} //3 secs
      />
      )

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