import './PokemonListItemEmpty.css';

const PokemonListItemEmpty = () => {
  return (
    <>
      <h3>
        {'<empty>'}
      </h3>
      <div className="PokemonListItemEmpty">⚠️</div>
    </>
  );
};

export default PokemonListItemEmpty;
