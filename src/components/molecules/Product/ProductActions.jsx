import React from 'react'
import { Button } from '../../index'
import bagIcon from '../../../assets/icons/icon-bag.svg'
import { ProductPropTypes, SkuPropTypes } from '../../../models/productModel'

export const ProductActions = ({product, sku}) => {

    const handleBagClick = () => {
        alert('bag clicked for product id:' + product.id + ' and sku code:' + sku.code)
    }

    const handleAddToCart = () => {
        alert('add to cart clicked for product id:' + product.id + ' and sku code:' + sku.code)
    }

    return (
        <div className="product-actions">
            <Button variant="icon" onClick={()=>handleBagClick()}>
                <img src={bagIcon} alt="bag" />
            </Button>
            <Button variant="primary" onClick={()=>handleAddToCart()}>Add to cart</Button>
        </div>
    )
}

ProductActions.propTypes = {
    product: ProductPropTypes,
    sku: SkuPropTypes
}
