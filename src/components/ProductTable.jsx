import React from 'react';
import styled from 'styled-components';
import ProductListing from './ProductListing';

const Title = styled.div`
    font-weight: bold;
    color: hotpink;
`;

class ProductTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryNameOnly: this.props.categoryNameOnly,
            categoryWithProducts: this.props.categoryWithProducts
        }
    }


    displayAllCategories() {
        console.log('display all');
        console.log(this.state.categoryNameOnly);
        return this.state.categoryNameOnly.map((catName) =>
            <ProductListing key={catName} title={catName} products={this.state.categoryWithProducts[catName]} />
        )
    }

    displaySelectedCategory() {
        return <ProductListing key={this.props.selectedCategory} title={this.props.selectedCategory}
            products={this.state.categoryWithProducts[this.props.selectedCategory]} />
    }


    render() {
        console.log('product table');
        console.log(this.props.selectedCategory);
        return (
            <div className="producttable">
                <h1>{this.props.searchTerm}</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4">
                            <Title>Name</Title>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                            <Title>Price</Title>
                        </div>
                        {
                            this.props.selectedCategory === "--Select--" ? this.displayAllCategories() : this.displaySelectedCategory()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTable;