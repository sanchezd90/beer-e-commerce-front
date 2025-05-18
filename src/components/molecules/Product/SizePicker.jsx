import React from 'react'
import { Pill } from '../../index'
import { ProductPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'

export const SizePicker = ({product, setSelectedSku, selectedSku}) => {

  const handleClick = (sku) => {
    setSelectedSku(sku)
  }

  return (
    <div>
        <h3>Size</h3>
        {product.skus.map((sku) => (
            <Pill key={sku.code} text={sku.name} active={sku.code === selectedSku} onClick={()=>handleClick(sku)}/>                            
        ))}

    </div>
  )
}

SizePicker.propTypes = {
    product: ProductPropTypes,
    setSelectedSku: PropTypes.func.isRequired
}
