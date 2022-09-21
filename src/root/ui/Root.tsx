import Pikachu from 'pikachu/ui/Pikachu';
import PokemonList from 'pokemonList/ui/PokemonList';
import React, { useState } from 'react';
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

type ContentName = 'PokemonList' | 'Pikachu';

const CONTENT_NAMES: ContentName[] = [
  'PokemonList',
  'Pikachu',
];

const Root = () => {
  const [ contentName, setContentName ] = useState<ContentName>('PokemonList');

  const handleContentNameClick = (contentName: ContentName) => () => {
    setContentName(contentName);
  };

  const renderContent = (contentName: ContentName) => {
    switch (contentName) {
      case 'PokemonList': {
        return <PokemonList />;
      }
      case 'Pikachu': {
        return <Pikachu />;
      }
    }
  };

  return (
    <Provider store={store}>
      <App>
        <section className="App-section">
          {CONTENT_NAMES.map((contentName) => (
            <span
              key={contentName}
              className="App-link"
              onClick={handleContentNameClick(contentName)}
            >
              {contentName}
            </span>
          ))}
          {renderContent(contentName)}
        </section>
      </App>
    </Provider>
  );
};

export default Root;
