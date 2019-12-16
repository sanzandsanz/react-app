import React from 'react';

class ProductDetail extends React.Component {
    render() {
       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-4">
                        {this.props.product.name}
                    </div>
                    <div className="col-xs-6 col-sm-4">
                        {this.props.product.price}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;