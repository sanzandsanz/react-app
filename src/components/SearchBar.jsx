import React, { Component } from 'react';
import CategoryDropDown from './CategoryDropDown';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <CategoryDropDown
                                categories={this.props.categories}
                                onChange={this.props.onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;