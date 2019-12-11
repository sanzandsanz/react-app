import React from 'react';

class ProductTitle extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        { this.props.value }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTitle;