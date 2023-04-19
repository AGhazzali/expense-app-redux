import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  )
}

function SearchBar() {
  return (
    <div>
      <form>
        <input type='text' placeholder='Search items' />
        <br />
        <label>
          <input type='checkbox' />
          Only show products in stock
        </label>
      </form>
    </div>
  )
}

function ProductTable({ products }) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    console.log(lastCategory)
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow
        category={product.category}
        key={product.category}
      />)
    }
    rows.push(<ProductRow
      product={product}
      key={product.name}
    />
    )
    lastCategory = product.category
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: '#FF0000' }}>
      {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IndecisionApp /> */}
    <FilterableProductTable products={PRODUCTS} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
