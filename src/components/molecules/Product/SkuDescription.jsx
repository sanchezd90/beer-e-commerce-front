import React, { useState, useRef, useEffect } from 'react';
import { ProductPropTypes } from '../../../models/productModel'

const SkuDescription = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;    
    setIsTruncated(el.scrollHeight > el.clientHeight);
  }, [product.information, expanded]);  

  return (
    <div className="sku-description">
      <h3 className="sku-description__title">Description</h3>
      <p
        className={`sku-description__body ${expanded && 'sku-description__body--expanded'}`}
        ref={bodyRef}
      >
        {product.information}
        {isTruncated && !expanded && (
          <span
            className="sku-description__body--read-more"
            onClick={() => setExpanded(true)}
          >
            {' '}Read more
          </span>
        )}        
      </p>
    </div>
  );
};

SkuDescription.propTypes = {
  product: ProductPropTypes
}

export default SkuDescription;