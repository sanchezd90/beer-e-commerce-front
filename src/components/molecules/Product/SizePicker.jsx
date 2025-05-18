import React from 'react'
import { Pill } from '../../index'
import { ProductPropTypes } from '../../../models/productModel'
import PropTypes from 'prop-types'

const SizePicker = ({product, setSelectedSku}) => {

  const handleClick = (skuCode) => {
    setSelectedSku(skuCode)
  }

  return (
    <div>
        <h3>Size</h3>
        {product.skus.map((sku) => (
            <Pill key={sku.code} onClick={()=>handleClick(sku.code)}>
                <p>{sku.name}</p>
            </Pill>
        ))}

    </div>
  )
}

SizePicker.propTypes = {
    product: ProductPropTypes,
    setSelectedSku: PropTypes.func.isRequired
}

export default SizePicker