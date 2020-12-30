import React from 'react'
import { connect } from 'react-redux';
import {searchHeadlines} from '../store/actions/headlinesActions';
import { useState } from 'react';

const SearchBar = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
        // search()
    }

    const submitSearch = () => {
        props.search(searchQuery);
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={handleChange} value={searchQuery} placeholder="Type a Headline..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={submitSearch}>Search</button>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     searchQuery: state.headlines.searchQuery
// });

const mapDispatchToProps = (dispatch) => {
    return {
        search: (searchQuery) => dispatch(searchHeadlines(searchQuery))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
