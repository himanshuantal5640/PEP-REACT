import React, {useEffect, useState } from 'react'

import ProductCard from './ProductCard'

const ProductList = () => {
    // const [count, setCount] = useState(0);

    // useEffect(()=>{
    //     console.log('ProductList component mounted');
    // })
    // pass dependecy array to useEffect to run only once when component mounts
    // mount only once when empty array is passed and when count state changes when count is passed in dependency array
    // useEffect(()=>{
    //     console.log('Count state updated');
    //     return () => {
    //         console.log('Cleanup function called');
    //     }
    // },[])

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        console.log('Fetching products...');
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            console.log('Products fetched:', data.products);
            setProducts(data.products);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    },[]) 
    useEffect(()=>{
        console.log('Products state updated:', products);
        return () => {
            console.log('Cleaning up products state');
            setProducts([]);
        }   
    },[] );


  return (
    <div>
        {/* <h1 className='text-3xl font-bold mb-4'>Count: {count}</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='bg-red-500 text-white px-4 py-2 rounded ml-2' onClick={()=>count>0 && setCount(count-1)}>Decrement</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded ml-2' onClick={()=>setCount(0)}>Reset</button> */}
        <h1 className='text-3xl font-bold mb-4'>Our Products</h1>
        {loading ? (
            <p>Loading products...</p>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        )}
    </div>
  )
}

export default ProductList
