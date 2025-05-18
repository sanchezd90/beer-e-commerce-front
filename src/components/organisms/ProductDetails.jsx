import React from 'react'
import { SkuHeader, ProductActions, SkuDescription, SizePicker } from '../index'
import { ProductPropTypes, SkuPropTypes } from '../../models/productModel'
import PropTypes from 'prop-types'

export const ProductDetails = ({product, sku, setSelectedSku}) => {  
  return (
    <section className="product-details">
        <div className="product-details__card">
            <SkuHeader product={product} sku={sku}/>
            <SkuDescription product={product} />
            <SizePicker product={product} selectedSku={sku} setSelectedSku={setSelectedSku}/>
            <ProductActions product={product} sku={sku}/>
        </div>
    </section>
  )
}

ProductDetails.propTypes = {
    product: ProductPropTypes,
    sku: SkuPropTypes,
    setSelectedSku: PropTypes.func
}
