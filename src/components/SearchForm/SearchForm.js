import React from 'react'
import style from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <form className={style.SearchForm}>
      <button type="submit" className={style.SearchFormbutton}>
        <span className={style.SearchFormbuttonlabel}>Search</span>
      </button>

      <input
        className={style.SearchForminput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </form>
  );
}

export default SearchForm;
