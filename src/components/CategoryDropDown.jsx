import React, { Component } from 'react';

class CategoryDropDown extends Component {
    render() {
        const options = this.props.categories.map((item, key) => 
            {
                return <option key={key}> { item } </option>
            }
        );

        return (
            <select>
                <option key="-1" > -- Select -- </option>
               { options }
            </select>
        );

    }
}

export default CategoryDropDown;