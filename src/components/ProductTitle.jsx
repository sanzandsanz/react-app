import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-weight: bold;
    color: red;
`;

class ProductTitle extends React.Component {
    render() {
        return (
            <Title> {this.props.title } </Title>
        );
    }
}

export default ProductTitle;