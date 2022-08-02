import React, {useEffect, useState} from "react";
import style from "./Pagination.module.scss"
import {Link} from "react-router-dom";

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, searchParams}) => {
    const [currentButton, setCurrentButton] = useState(parseInt(searchParams.get("page") || ""))
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]

        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'


        if (pageNumbers.length < 6) {
            tempNumberOfPages = pageNumbers
        } else if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, dotsInitial, pageNumbers.length]
        } else if (currentButton === 4) {
            const sliced = pageNumbers.slice(0, 5)
            tempNumberOfPages = [...sliced, dotsInitial, pageNumbers.length]
        } else if (currentButton > 4 && currentButton < pageNumbers.length - 2) {               // from 5 to 8 -> (10 - 2)
            const sliced1 = pageNumbers.slice(currentButton - 2, currentButton)                 // sliced1 (5-2, 5) -> [4,5]
            const sliced2 = pageNumbers.slice(currentButton, currentButton + 1)                 // sliced1 (5, 5+1) -> [6]
            tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, pageNumbers.length]) // [1, '...', 4, 5, 6, '...', 10]
        } else if (currentButton > pageNumbers.length - 3) {                 // > 7
            const sliced = pageNumbers.slice(pageNumbers.length - 4)       // slice(10-4)
            tempNumberOfPages = ([1, dotsLeft, ...sliced])
        } else if (currentButton === dotsInitial) {
            // [1, 2, 3, 4, "...", 10].length = 6 - 3  = 3
            // arrOfCurrButtons[3] = 4 + 1 = 5
            // or
            // [1, 2, 3, 4, 5, "...", 10].length = 7 - 3 = 4
            // [1, 2, 3, 4, 5, "...", 10][4] = 5 + 1 = 6
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
        } else if (currentButton === dotsRight) {
            setCurrentButton(arrOfCurrButtons[3] + 2)
        } else if (currentButton === dotsLeft) {
            setCurrentButton(arrOfCurrButtons[3] - 2)
        }

        setArrOfCurrButtons(tempNumberOfPages)
        setCurrentPage(currentButton)
    }, [currentButton])


    return (<>
         <ul className={style.moviesList}>
                <a onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                   href="#" className={style.button}>Prev</a>
                {arrOfCurrButtons.map((page, index) => (<li key={page} className={style.movieItem}>
                        <Link
                            key={index}
                            className={currentButton === page ? `${style.active}` : `${style.link}`}
                            onClick={() => setCurrentButton(page)} to="#">
                            {page}
                        </Link>
                    </li>))}
                <a onClick={() => setCurrentButton((prev) => prev === totalPosts ? prev : prev + 1)}
                   href="#" className={style.button}>Next</a>
            </ul>
        </>)
}

export default Pagination;
