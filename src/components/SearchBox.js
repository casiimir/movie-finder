import React from 'react';

const SearchBox = ({ dbKey, byClick }) => {
    return (
        <div className="tc mv4">
            <input className="w-80 h3 br3 f3 ph3"
            type="search"
            name=""
            id=""
            onChange={dbKey}
            onKeyUp={byClick}
        />
            {/* <button className="mb5f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" onClick={byClick}>Search!</button> */}
        </div>
    )
}

export default SearchBox;