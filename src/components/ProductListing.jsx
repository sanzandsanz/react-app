import React from 'react';
import Product from './Product';

class ProductListing extends React.Component {
    render() {
        let products = this.props.products;
        return products.map((product) => {
            return <Product product={product} key={product.name} />
        });
    }
}

export default ProductListing;