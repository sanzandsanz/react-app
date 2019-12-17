import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '--Select--'
        };
    }

    updateSearchTerm = (term) => {
        console.log('updateSearchTerm');
        this.setState( { searchTerm: term });
    }

    render() {
        const products = this.props.productData;
        let categoryName = "";
        let categoryRelatedProducts = [];
        let categoryWithProducts = [];
        let categoryNameOnly = [];

        products.map((item) => {

            if (categoryName !== item.category) {
                categoryName = item.category;
                categoryRelatedProducts = [];
                categoryNameOnly.push(categoryName);
            }

            categoryRelatedProducts.push(item);
            return categoryWithProducts[categoryName] = categoryRelatedProducts;
        });

        return (
            <div className="filterable-product-table">
                <SearchBar
                    categories={categoryNameOnly}
                    onChange={this.updateSearchTerm}
                />
                {<ProductTable productData={this.props.productData}
                    selectedCategory={this.state.searchTerm}
                    categoryWithProducts={categoryWithProducts}
                    categoryNameOnly={categoryNameOnly}
                />}
            </div>
        );
    }
}

export default FilterableProductTable;