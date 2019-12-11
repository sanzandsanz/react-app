import React from 'react';
import styled from 'styled-components';
import ProductListing from './ProductListing';

const Title = styled.div`
    font-weight: bold;
    color: hotpink;
`;

class ProductTable extends React.Component {
    render() {
        return (
            <div className="producttable">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4">
                            <Title>Name</Title>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                            <Title>Price</Title>
                        </div>
                        <ProductListing products={this.props.productData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTable;