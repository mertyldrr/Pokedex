import Pokemon from './containers/Pokemon';
import PokemonList from './containers/PokemonList';


const routes = [
    //The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.
    {
        exact: true,
        path: "/",
        component: PokemonList
    },

    {
        path: "/pokemon/:pokemon", // props => match => params => pokemon=:pokemon 
        component: Pokemon
    }
]


export default routes;