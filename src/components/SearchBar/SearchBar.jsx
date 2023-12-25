import React from 'react';
import { useState } from 'react';
import s from './SearchBar.module.css'

export const SearchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    setQuery(inputValue);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={onSubmit}>
        <button type="submit">
          
        </button>

        <input className={s.input}
          type="text"
          placeholder="Search movie"
          name="inputValue"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          required
        />
      </form>
    </header>
  );
};
export default SearchBar;

