import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import ProductTitle from './ProductTitle';

class Product extends Component {
    render() {
        let title = this.props.title;
        let productlist = this.props.products

        const listofproducts = productlist.map((item, key) =>
            <ProductDetail key={key} product={item} />
        );

        console.log(listofproducts);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <ProductTitle title={title} />
                        {listofproducts}
                    </div>
                </div>
                
            </div>
        );

    }
}

export default Product;