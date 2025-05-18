import React from 'react'
import {Button, Rating} from '../../index'
import { Navigate } from 'react-router-dom'
import { ProductPropTypes, SkuPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'

const ProductCard = ({product, sku, reverse}) => {

    const handleAddToCart = (e) => {
        e.preventDefault()
        alert(`${product.brand} ${sku.name} added to cart`)
    }

    const handleSelectProduct = () => {        
        <Navigate to={`/product/${product.id}-${product.brand.toLowerCase().replace(/\s+/g, '-')}`} />
    }

  return (
    <article className={`card ${reverse && 'card--reverse'}`} onClick={handleSelectProduct}>
        <p className="card__brand">{product.brand}</p>
        <img src={product.image} alt="product" className="card__image" />
        <div className="card__price-rating">
            <Rating rating={product.rating} />
            <p className="card__price">${sku.price/100}</p>
        </div>
        <Button variant="add" onClick={handleAddToCart}>Add to cart</Button>
    </article>
  )
}

ProductCard.propTypes = {
    product: ProductPropTypes,
    sku: SkuPropTypes,
    reverse: PropTypes.bool
}

export default ProductCard