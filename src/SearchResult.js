import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import StarIcon from "@mui/icons-material/Star"

function SearchResult({
    img, location, title, description, star,price, total,
}) {
    return (
        <div className="SearchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="SearchResult_heart"/>
            <div className="SearchResult_info">
                <div className="SearchResult_infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>______</p>
                <p>{description}</p>
                </div>

                <div className="SearchResult_infoBottom">
                    <div className="SearchResult_stars">
                       <StarIcon className="SearchResult_star" /> 
                    <p><strong>{star}</strong></p>
                    </div>
                <div className="SearchResult_price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
                </div>
               

            </div>
        </div>
    )
}

export default SearchResult
