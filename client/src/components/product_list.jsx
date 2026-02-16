import React from 'react'
import products from '../data/product'
import ProductCard from './product_card'

const ProductList = () => {
  return (
    <div>
      <h1>Our Products</h1>
      {products.map(p =>(
        < ProductCard
        key = {p.id}
        name={p.name}
        price={p.price}
        inStock={p.inStock}
        />
      ))}
    </div>
  )
}

export default ProductList
