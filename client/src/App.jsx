import React from 'react'
import './App.css'
import ProductList from './components/product_list'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Counter from './components/counter'
import AddForm from './components/AddForm'

function App() {
  return (
    <>
      {/* <ProductList/>
        <Navbar />

      <div className="pt-20">
        <Hero />
        <Features/>
        <Pricing/>
        <Contact/>
      </div> */}

      {/* <Counter/> */}
      <AddForm/>
    </>
  )
}

export default App
