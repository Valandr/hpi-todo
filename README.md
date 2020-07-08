This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# hpi-todo

hpi-todo is a task manager app built with React.

Technology used:

Front:
- React
- React Router
- Styled-Components
- React-Toastify

Back:
- Mockapi

## Getting started

The project uses Yarn as package manager.

### Start the project

```bash
yarn start
```

Add `:dev` to the command to start the project in dev mode.

### Build the project

```bash
yarn build
```

Add `:dev` to the command to build the project in dev mode.

### Test the project

```bash
yarn test
```

Roadmap:

- Todo-list récupérée depuis une Api externe
- Tâches ordonnées en 2 blocs: tâches en cours et tâches terminées
- Un input pour ajouter une tâche
- Marquer une tâche comme terminée
- Un bouton pour supprimer toutes les tâches terminées
- Requêtes http sur l'Api externe : GET, POST, PUT, DELETE
- Système de notification temporaire
- Système de navigation sur 3 pages: page d'accueil, tâches terminées & sélection de thème
- Hébergement sur Netlify

