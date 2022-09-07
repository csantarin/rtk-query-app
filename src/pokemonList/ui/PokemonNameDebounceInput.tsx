import React from 'react';
import { DebounceInput } from 'react-debounce-input';

export interface PokemonNameDebounceInputProps {
  value: string;
  debounceTimeout?: number;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) & React.ChangeEventHandler<HTMLInputElement>;
  onInsertAtClick?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteAtClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PokemonNameDebounceInput = (props: PokemonNameDebounceInputProps) => {
  const { debounceTimeout, value, onChange, onInsertAtClick, onDeleteAtClick } = props;

  return (
    <div>
      <DebounceInput
        // Don't make RTK Query pull data for each keystroke.
        debounceTimeout={debounceTimeout}
        value={value}
        onChange={onChange} />
      <button onClick={onInsertAtClick}>+</button>
      <button onClick={onDeleteAtClick}>-</button>
    </div>
  );
};


export default PokemonNameDebounceInput;
