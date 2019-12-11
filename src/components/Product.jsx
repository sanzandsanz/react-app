import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

class Product extends Component {
    render() {
        let product = this.props.product;
        return ( <ProductDetail product={product} />);
    }
}

export default Product;