import React, { useState } from 'react';
import { ProductPropTypes } from '../../../models/productModel'

export const SkuDescription = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;
  const isTruncated = product.information.length > maxLength;
  const displayText = expanded 
    ? product.information 
    : `${product.information.slice(0, maxLength)}...`;

  return (
    <div className="sku-description">
      <h3 className="sku-description__title">Description</h3>
      <div className="sku-description__content">
        <p className="sku-description__body">
          {displayText}
          {isTruncated && !expanded && (
            <span
              className="sku-description__body--read-more"
              onClick={() => setExpanded(true)}
            >
              Read more
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

SkuDescription.propTypes = {
  product: ProductPropTypes
}
