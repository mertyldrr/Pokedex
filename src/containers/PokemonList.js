import React, { useEffect } from 'react';
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import _ from "lodash";
import { GetPokemonList } from '../redux/actions/PokemonAction';

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = (page = 1) => {
        dispatch(GetPokemonList(page));
    }
    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return <p>have data</p>
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