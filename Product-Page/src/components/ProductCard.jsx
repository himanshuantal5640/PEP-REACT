import React, { useEffect } from 'react'

const ProductCard = ({product}) => {
    // const {name,price,inStcok} = props --> deconstruct 
    console.log("ProductCar Rendered: ", product.id);
    useEffect(()=>{
        console.log("ProductCard Mounted: ", product.id);
        return () => {
            console.log("ProductCard Unmounted: ", product.id);
        }
    },[]);

  return (
   <>
 
    {/* we fetch product form dummjjson */}
    <div className='border p-4 rounded-lg shadow-md'>
        <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
        <p className='text-gray-700 mb-2'>Price: ${product.price}</p>
        <p className={`font-semibold ${ 
            product.stock > 0 ? 'text-green-500' : 'text-red-500'
        }`}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
    </div>
    
   
   </>
  )
}

export default ProductCard;
