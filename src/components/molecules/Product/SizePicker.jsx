import React from 'react'
import { Pill } from '../../index'
import { ProductPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'

export const SizePicker = ({product, setSelectedSku, selectedSku}) => {

  const handleClick = (sku) => {
    setSelectedSku(sku)
  }

  return (
    <div className="sku-size-picker">
        <h3>Size</h3>
        <div className="sku-size-picker__pills">
          {product.skus.map((sku) => (
              <Pill key={sku.code} text={sku.name} active={sku === selectedSku} onClick={()=>handleClick(sku)}/>                            
          ))}         
        </div>

    </div>
  )
}

SizePicker.propTypes = {
    product: ProductPropTypes,
    setSelectedSku: PropTypes.func.isRequired
}
