import React, { Component } from 'react';

class CategoryDropDown extends Component {

    constructor(props){
        super(props);
        this.state = {
            value : ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event.target.value);
    }

    render() {
        const options = this.props.categories.map((item) => 
            {
                return <option key={item}> { item } </option>
            }
        );

        return (
            <select onChange = {this.handleChange} value = {this.state.value}>
                <option  key={this.state.value} > --Select-- </option>
               { options }
            </select>
        );
    }
}

export default CategoryDropDown;