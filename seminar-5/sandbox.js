import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';


function SearchSection({ onTextChange, onTextBoxChange }){
    return (    
        <div className="search-div">
            <input className="search-input" 
                    type="text" 
                    placeholder="Enter itemname: "
                    onChange={ (event) => onTextChange(event.target.value) }>
            </input>
            <label className="search-label">
                <input className="check-box-input" 
                        type="checkbox"
                        onChange={ (event) => onTextBoxChange(event.target.checked) }>
                </input>
                Only show products in stock
            </label>
        </div>
    )
}


function CategoryRow({ category }) {
    return (
        <tr>
            <td colSpan="2" className="category">{ category }</td>
        </tr>
    )
}


function ProductRow({ product }) {
    return (
        <tr>
            <td>{ product.name }</td>
            <td>{ product.price }</td>
        </tr>
    )
}


function TableSection({ products, text, onlyOnStock }){
    const rows : string[] = []
    let category;

    for(let product of products) {

        if (product.name.toLowerCase().indexOf(text.toLowerCase()) === -1)
            continue

        if(onlyOnStock && !product.stocked) 
            continue

        if(product.category !== category){
            category = product.category
            rows.push(<CategoryRow category = { category } />)
        }   
        rows.push(<ProductRow product = { product } />)
    }

    return (
        <div className="table-div">
            <table>
                <thead>
                    <tr>
                        <td className="table-header">Name</td>
                        <td className="table-header">Price</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


    
function Polygon({ products }){

    const[text, setText] = useState("")
    const[onStockChecked, setOnStockChecked] = useState()

    return (
        <div className="polygon-div">
            <h2 className="my-h2">Made with react</h2>
            <SearchSection onTextChange = { setText } onTextBoxChange = { setOnStockChecked } />
            <TableSection products = { products } text = { text } onlyOnStock = { onStockChecked }/>
        </div>
    )
}


const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Orange" },
    { category: "Fruits", price: "$2", stocked: false, name: "Grapes" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Cucumber" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Eggplant" }
];


function App(){
    return <Polygon products={PRODUCTS} />
}


const root = createRoot(document.getElementById("root"))
root.render(<App />)