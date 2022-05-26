import React from 'react'
import { Product } from './product/product'
import './product-page.css'

export const ProductPage = () => {
  return (
    <div className='product-page__container'>
        <Product/>
        <Product/>
    </div> )
}
