import React from 'react'
import style from './SearchForm.module.css'

const SearchForm = ({ onSubmit }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    onSubmit(query);
  };

  return (
    <form className={style.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={style.SearchFormbutton}></button>

      <input
        className={style.SearchForminput}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}

export default SearchForm;
