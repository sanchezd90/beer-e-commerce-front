import React from 'react'
import {useStockPrice} from '../../../hooks/useStockPrice'
import { ProductPropTypes, SkuPropTypes } from '../../../models/productModel'

export const SkuHeader = ({product, sku}) => {

    const {data: stockPrice} = useStockPrice(sku.code);

    return (
        <div className="sku-header">
            <div className="sku-header__brand-price">
                <h3 className="sku-header__brand">{product.brand}</h3>
                <p className="sku-header__price">${stockPrice?.price && stockPrice.price/100}</p>
            </div>
            <p className="sku-header__origin-stock">Origin: {product.origin} | Stock: {stockPrice?.stock}</p>
        </div>
    )
}

SkuHeader.propTypes = {
    product: ProductPropTypes,
    sku: SkuPropTypes
}
