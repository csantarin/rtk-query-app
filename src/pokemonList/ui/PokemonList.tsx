import React, { useState } from 'react';

import PokemonListItem from './PokemonListItem';
import PokemonListItemEmpty from './PokemonListItemEmpty';
import PokemonNameDebounceInput from './PokemonNameDebounceInput';

const PokemonList = () => {
  const [ pokemonNames, setPokemonNames ] = useState([
    'bulbasaur',
    'pikachu',
    'ditto',
    'bulbasaur'
  ]);

  const handleAddButtonClick = () => {
    const newPokemonNames = pokemonNames.slice();
    newPokemonNames.push('');
    setPokemonNames(newPokemonNames);
  };

  const [ pollingInterval, setPollingInterval ] = useState(0);
  const handlePollingIntervalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPollingInterval(Number(event.target.value));
  };

  const [ unmounted, setUnmounted ] = useState(false);
  const handleUnmountedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUnmounted(Boolean(event.target.checked));
  };

  return (
    <div className='App'>
      <select onChange={handlePollingIntervalChange}>
        <option value={0}>Off</option>
        <option value={1000}>1s</option>
        <option value={5000}>5s</option>
      </select>
      <label>
        <input type="checkbox" onChange={handleUnmountedChange} />
        <span>Unmounted</span>
      </label>

      <div>
        {!pokemonNames.length && (
          <button onClick={handleAddButtonClick}>
            + Add a Pokemon
          </button>
        )}
        {pokemonNames.map((pokemonName, index) => {
          const handlePokemonNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newPokemonNames = pokemonNames.slice();
            newPokemonNames[index] = event.target.value;
            setPokemonNames(newPokemonNames);
          };

          const handleInsertAtButtonClick = () => {
            const newPokemonNames = pokemonNames.slice();
            newPokemonNames.splice(index + 1, 0, '');
            setPokemonNames(newPokemonNames);
          };

          const handleDeleteAtButtonClick = () => {
            const newPokemonNames = pokemonNames.slice();
            newPokemonNames.splice(index, 1);
            setPokemonNames(newPokemonNames);
          };

          return (
            <PokemonNameDebounceInput
              key={`PokemonName-${index}`}
              // Don't make RTK Query pull data for each keystroke.
              debounceTimeout={500}
              value={pokemonName}
              onChange={handlePokemonNameChange}
              onInsertAtClick={handleInsertAtButtonClick}
              onDeleteAtClick={handleDeleteAtButtonClick}
            />
          );
        })}
      </div>

      {!unmounted && (
        <div>
          {!pokemonNames.length && (
            <div>
              Nothing to list. Add a Pokemon!
            </div>
          )}
          {pokemonNames.map((pokemonName, index) => {
            if (!pokemonName) {
              return (
                <PokemonListItemEmpty
                  key={`PokemonListItemEmpty-${index}`}
                />
              );
            }
            return (
              <PokemonListItem
                key={`PokemonListItem-${index}`}
                name={pokemonName}
                pollingInterval={pollingInterval}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
