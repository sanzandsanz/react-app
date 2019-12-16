import React from 'react';
import Product from './Product';

class ProductListing extends React.Component {
    render() {
        return <Product title= {this.props.title} products={this.props.products} />
    }
}

export default ProductListing;