import React, { Component } from 'react';

class CategoryDropDown extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event.target.value);
    }

    render() {
        const options = this.props.categories.map((item) => 
            {
                return <option value={item} key={item}> { item } </option>
            }
        );

        return (
            <select onChange = {this.handleChange} >
                <option value="none" > --Select-- </option>
               { options }
            </select>
        );
    }
}

export default CategoryDropDown;