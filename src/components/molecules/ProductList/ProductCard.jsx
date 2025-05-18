import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Rating} from '../../index'
import { ProductPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'
import { useStockPrice } from '../../../hooks/useStockPrice'

export const ProductCard = ({product, reverse}) => {

    const { data: sku } = useStockPrice(product.skus[0].code)
    const navigate = useNavigate()

    const handleAddToCart = (e) => {
        e.stopPropagation()
        alert(`${product.brand} ${sku.name} added to cart`)
    }

    const handleSelectProduct = () => {       
        navigate(`/product/${product.id}-${product.brand.toLowerCase().replace(/\s+/g, '-')}`)
    }

  return (
    <article className={`card ${reverse && 'card--reverse'}`} onClick={handleSelectProduct}>
        <p className="card__brand">{product.brand}</p>
        <img 
          src={`/src/assets${product.image}`} 
          alt="product" 
          className="card__image" 
        />
        <div className="card__price-rating">
            <Rating rating={product.rating} />
            <p className="card__price">${sku?.price/100}</p>
        </div>
        <Button variant="add" onClick={handleAddToCart}>Add to cart</Button>
    </article>
  )
}

ProductCard.propTypes = {
    product: ProductPropTypes,
    reverse: PropTypes.bool
}
