import React from "react";
import style from "./Pagination.module.scss"

const Pagination = ({ totalPosts, postsPerPage, paginate } ) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className={style.moviesList}>
            {pageNumbers.map((number) => (
                <li key={number} className={style.movieItem}>
                   <a onClick={() => paginate(number)} href="#" >
                       {number}
                   </a>
                </li>
            ))}
        </ul>
    )
}

export default Pagination;
