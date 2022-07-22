import React from 'react'
import {useNavigate} from "react-router-dom";
import style from './SearchForm.module.scss'

const SearchForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        if (query !== "") {
            console.log(query);
            navigate(`/movies/search?query=${query}`)
            e.target.search.value = ""
        }
    };

    return (<form className={style.SearchForm} onSubmit={handleSubmit}>
            <input type="submit" value="" className={style.SearchFormbutton}></input>

            <input
                className={style.SearchForminput}
                name="search"
                type="text"
                autoComplete="off"
                placeholder="Search movies"
            />
        </form>);
}

export default SearchForm;
