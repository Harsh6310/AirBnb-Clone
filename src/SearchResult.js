import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star'
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className='searchResult'>
            <div className='roomImg'>
            <img src={img} alt='Search Result'/>
            </div>
            <FavoriteBorderIcon className='searchResultHeart'/>
            <div className='searchResultInfo'>
                <div className='searchResultInfoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className='searchResultInfoBottom'>
                    <div className='searchResultInfoStars'>
                        <StarIcon className='searchResultInfoStar'/>
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResultPrice'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchResult
