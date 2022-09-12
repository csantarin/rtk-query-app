import PokemonList from 'pokemonList/ui/PokemonList';
import React from 'react';
import { Provider } from 'react-redux';

import { sagaMiddleware } from 'root/sm/rootMiddleware';
import { rootRuntime } from 'root/sm/rootSagas';
import store from 'root/sm/store';

import './Root.css';

sagaMiddleware.run(rootRuntime);

const App = (props: React.PropsWithChildren) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RTK Query App</h1>
        <p>Kitchen sink use and study of RTK Query.</p>
      </header>
      {props.children}
    </div>
  );
};

const Root = () => {
  return (
    <Provider store={store}>
      <App>
        <section className="App-section">
          <PokemonList />
        </section>
      </App>
    </Provider>
  );
};

export default Root;
