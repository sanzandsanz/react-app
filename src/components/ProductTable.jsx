import React from 'react';
import styled from 'styled-components';
import ProductListing from './ProductListing';

const Title = styled.div`
    font-weight: bold;
    color: hotpink;
`;

class ProductTable extends React.Component {
    render() {
        const categoryWithProducts = this.props.categoryWithProducts;
        const categoryNameOnly = this.props.categoryNameOnly;

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

                        { 
                            categoryNameOnly.map((catName) => {
                                return <ProductListing key={catName} title={catName} products={ categoryWithProducts[catName]} />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTable;