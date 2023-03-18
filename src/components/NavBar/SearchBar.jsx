import React from "react";
import { Search } from "../../assets";
import "../NavBar/SearchBar.css"

// const SearchBar = () => (
//     <div className="searchbar">
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//         </label>
//         <div className="search">
//         <div className="searchInputs">
//         <input
//             type="text"
//             id="header-search"
//             placeholder="Search blog posts"
//             name="s" 
//         />
//         <div className="searchIcon"></div>
//         </div>
//         <div className="dataResults"></div>
//         </div>
//     </form>
//     </div>
// );

// export default SearchBar;

function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon">
                <img src={Search}></img>
                    </div>
            </div>
            <div className="dataResult"></div>
        </div>
    )

}

export default SearchBar