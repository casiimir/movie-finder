import React from 'react';

const SearchBox = ({ dbKey, byClick }) => {
    return (
        <div className="tc ma4">
            <input className="mb5 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" type="search" name="" id="" onChange={dbKey} onKeyDown={byClick}/>
            <button className="mb5f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" onClick={byClick}>Search!</button>
        </div>
    )
}

export default SearchBox;