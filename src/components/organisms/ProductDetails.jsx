import React from 'react'
import { SkuHeader, ProductActions, SkuDescription, SizePicker } from '../index'
import { ProductPropTypes } from '../../models/productModel'
import PropTypes from 'prop-types'

const ProductDetails = ({product}) => {
  return (
    <section className="product-details">
        <div className="container product-details__card">
            <SkuHeader product={product} />
            <ProductActions product={product} />
            <SkuDescription product={product} />
            <SizePicker product={product} />
        </div>
    </section>
  )
}

ProductDetails.propTypes = {
    product: ProductPropTypes
}

export default ProductDetails