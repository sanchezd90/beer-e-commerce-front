import React, { Suspense } from 'react'
import { ProductCard, Loader } from '../index'
import { ProductPropTypes } from '../../models/productModel'
import PropTypes from 'prop-types'
import { useProducts } from '../../hooks/useProducts'

export const ProductList = () => {
  const { data:products } = useProducts();

  return (
    <section className="product-list">     
        <h2>Our Products</h2>        
        <div className="product-list__grid">
            {products?.map((product, index) => (
                <ProductCard key={product.id} product={product} reverse={index % 2 !== 0} />
            ))}
        </div>        
    </section>
  )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(ProductPropTypes).isRequired
}
