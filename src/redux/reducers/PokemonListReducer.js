const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
  count: 0
};

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMessage: ""
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "unable to get pokemon"
      };

    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMessage: "",
        count: action.payload.count
      };
    default:
      return state
  }
}

export default PokemonListReducer;