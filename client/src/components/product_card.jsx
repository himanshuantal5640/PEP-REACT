import React from 'react'
import styles from './productCard.module.css';
const ProductCard = (props) => {
    // const {name,price,inStcok} = props --> deconstruct 

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.price}>Price: {props.price}</p>
      <p className={`${styles.stock} ${
          props.inStock ? styles.inStock : styles.outStock
        }`}>{props.inStock ? "Available":"Out of Stock"}</p>
    </div>
  )
}

export default ProductCard;
