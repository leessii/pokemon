TASKS: 
1. Locations:
- Show the received locations ( https://pokeapi.co/api/v2/location ) (first 20) on the site.

    1.The first 20 locations are present on the site.

2. Let's find some Pokemons:
- When the user clicks on a location, the game finds a random pokémon in that location and an encounter starts.

    1.The locations disappear when clicking on a location.

    2.The name and sprite (front_default) of the encountered pokémon appears on the page.

    3.If the selected location doesn't have any pokémon encounter, then show the message "This location doesn't seem to have any pokémon" and a button. When clicking on the button, the list of locations should be displayed again.

3. The battle begins:
- When the encounter begins, pick one of your own pokémon to fight. Since we don't have a Catch function in our code, right now you just need to hard code the chosen pokemons into a list eg.:

// starting pokemons
const usersPokemon = [
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/poliwhirl"
]

    1.The name and sprite of all pokémon owned by the player are shown at the beginning of the encounter.

    2.The user can pick one of their own pokémon and the selected pokémon is displayed as well as the encountered one.

4. The encounter:
- The player and the encountered (opponent) pokémon take turns attacking each other until the hp of one of them reaches 0.

    1.When a pokémon takes its turn, some damage is subtracted from the other pokémon's hp. The damage is calculated using the following formula: ((((2/5+2)*B*60/D)/50)+2)*Z/255, where B is the attacker's Attack, D is defender's Defense, and Z is a random number between 217 and 255. The HP, Attack, and Defense can be read from the API at pokemon.stats (see for example: pokemon.stats[0].stat.name).

    2.When the encountered pokémon's hp reaches 0 while our pokémon still has positive hp, then the encountered pokémon is captured, and it is added to the player's list of pokémon.

    3.When our pokémon's hp reaches 0 first, then the encounter ends.

    4.After the encounter, the available locations is shown again for the user to go somewhere else.

HINTS:

Getting all Pokémon on location:

location.areas[rand].url ->
let area = fetch("https://pokeapi.co/api/v2/location-area/1/")
area.pokemon_encounters[rand].pokemon.url

The sprite can be scaled up and preserve its pixelated style by using the following style on the img element: image-rendering: pixelated;

https://pokeapi.co/
https://www.math.miami.edu/~jam/azure/compendium/battdam.htm


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
