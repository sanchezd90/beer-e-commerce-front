import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, Rating} from '../../index'
import { ProductPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'
import { useStockPrice } from '../../../hooks/useStockPrice'

export const ProductCard = ({product, reverse}) => {

    const { data: sku } = useStockPrice(product.skus[0].code, true)
    const navigate = useNavigate()

    const handleAddToCart = (e) => {
        e.stopPropagation()
        alert(`${product.brand} ${product.skus[0].name} added to cart`)
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
            {product.rating && <Rating rating={product.rating} />}
            <p className="card__price">${sku?.price/100}</p>
        </div>
        <div className="card__button">
          <Button variant="add" onClick={handleAddToCart}>
            <p className="card__button-text">+</p>
          </Button>
        </div>
    </article>
  )
}

ProductCard.propTypes = {
    product: ProductPropTypes,
    reverse: PropTypes.bool
}
