import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetPokemonList } from '../redux/actions/PokemonAction';
import ReactPaginate from 'react-paginate';
import SinglePokemon from '../components/SinglePokemon';
import './PokemonList.css';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);

  // fetchData is also used outside of useEffect, that is why I used useCallback() hook.
  const fetchData = useCallback((page = 1) => {
    dispatch(GetPokemonList(page))

  }, [dispatch])


  // will trigger if the function's params change
  useEffect(() => {
    fetchData();

  }, [fetchData]);


  const showData = () => {

    if (pokemonList.loading) {
      return <p>Loading...</p>
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="pokemon-list-wrapper">
          {pokemonList.data.map((pokemon, index) => {
            return (
              <div className="pokemon-list-element p-1" key={index}>
                <SinglePokemon name={pokemon.name} sprite={pokemon.sprite} type={pokemon.types && pokemon.types[0]} />
              </div>
            )
          })}
        </div>
      )
    }

    if (pokemonList.errorMessage !== "") {
      return <p>{pokemonList.errorMessage}</p>
    }
  };
  return (
    <div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(page) => fetchData(page.selected + 1)}
          containerClassName={"pagination"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"previous-page"}
          nextLinkClassName={"next-page"}
        />
      )}
    </div>
  )
};

export default PokemonList;