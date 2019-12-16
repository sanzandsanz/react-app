import React from 'react';
import styled from 'styled-components';
import ProductListing from './ProductListing';

const Title = styled.div`
    font-weight: bold;
    color: hotpink;
`;

class ProductTable extends React.Component {
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
             categoryWithProducts[categoryName] = categoryRelatedProducts;
        });

        categoryWithProducts.map((productWithCat) => {
                console.log(productWithCat);
        });



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
                        
                        {/* { listing } */}

                        {/* <ProductListing products={this.props.productData} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTable;