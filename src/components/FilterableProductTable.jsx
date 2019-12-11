import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    render() {

        return (
            <div className="filterable-product-table">
                <SearchBar />
                <ProductTable productData={this.props.productData} />
            </div>
        );
    }
}

export default FilterableProductTable;