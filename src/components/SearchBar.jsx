import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <input type="text" name="searchBar" placeholder="Search" />
                            <br />
                            <input type="checkbox" name="searchAll" value="searchAll" /> Only show products in stock
                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;