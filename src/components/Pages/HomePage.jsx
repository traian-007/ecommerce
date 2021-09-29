import React from 'react'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import { products } from '../../data/data';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Products products={products}/>
        </>
    )
}

export default HomePage
