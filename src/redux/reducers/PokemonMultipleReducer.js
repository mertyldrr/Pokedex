const initialState = {
  loading: false,
  data: {},
  errorMessage: ""
};

const PokemonMultipleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_MULTIPLE_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: ""
      };

    case "POKEMON_MULTIPLE_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "unable to find pokemon"
      };

    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMessage: "",
        data: {
          //becuase data is already an object, to create copy, we use ...state.data
          ...state.data,
          [action.pokemonName]: action.payload  // [] for the variable (pokemonName will be an array in redux global state)
        }
      };

    default:
      return state
  }
}

export default PokemonMultipleReducer;