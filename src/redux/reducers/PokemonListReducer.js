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

    case "SPECIFIC_POKEMON_SUCCESS":
      const typesMap = action.payload.types.map((type) => {
        return type.type.name;
      })
      return {
        ...state,
        data: state.data.map((pokemon) => pokemon.name === action.payload.name 
                                  ? {...pokemon, types: typesMap}
                                  : pokemon
      ),
        loading: false,
        errorMessage: ""
      }
    case "SPECIFIC_POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        errorMessage: "unable to get pokemon"
      };
    default:
      return state
  }
}

export default PokemonListReducer;