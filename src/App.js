import React from 'react';
import './App.css';
import './components/sample.jsx';
import FilterableProductTable from './components/FilterableProductTable';

let dataSource = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Fruits", price: "$2", stocked: true, name: "Apple"}
  
];

function App() {
  
  return (
    <div>
        <FilterableProductTable
          productData={dataSource}
        />
    </div>
  );
}

export default App;
