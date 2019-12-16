import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    render() {
        const products = this.props.productData;
        let categoryName= "";
        let categoryRelatedProducts = [];
        let categoryWithProducts = [];
        let categoryNameOnly = [];
        

        products.map((item) => {

            if(categoryName !== item.category){
                categoryName = item.category;
                categoryRelatedProducts = [];
                categoryNameOnly.push(categoryName);
            }

             categoryRelatedProducts.push(item);
             return categoryWithProducts[categoryName] = categoryRelatedProducts;
        });

        return (
            <div className="filterable-product-table">
                <SearchBar categories = { categoryNameOnly }/>
                { <ProductTable productData={this.props.productData}
                                categoryWithProducts={categoryWithProducts} 
                                categoryName = {categoryName}
                                categoryNameOnly= {categoryNameOnly}
                  /> }
            </div>
        );
    }
}

export default FilterableProductTable;