import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Nav, ProductDetails } from '../components/index';
import iconBack from '../assets/icons/icon-back.svg';
import iconDots from '../assets/icons/icon-dots.svg';

const ProductDetail = () => {    

  const { id } = useParams();
  const [productId, _productBrand] = id.split(/-(.+)/)
  const { data: products, isLoading: loadingProducts } = useProducts(); 
  
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSku, setActiveSku] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  useEffect(() => {
    if (productId && !loadingProducts && products) {
      const currentProduct = products.find((product) => product.id == productId);      
      if(currentProduct) {
        setActiveProduct(currentProduct); 
        updateTab(currentProduct, 0);       
      }else{
        setShouldRedirect(true);
      }
    }
  }, [productId,loadingProducts,products]);  

  const updateTab = (product, tabIndex) => {
    setActiveTab(tabIndex);
    setActiveSku(product.skus[0]);
  }

  const handleBack = () => {
    return <Navigate to="/products" replace />
  }

  const handleDots = () => {
    alert('show options');
  }

  if (shouldRedirect) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="product-details-page">
      <Nav>
      <Toggle />
          <img src={iconBack} alt="back" onClick={handleBack} />
        <Toggle />
        <p className="product-details-page__nav-text">Details</p>
        <Toggle />
          <img src={iconDots} alt="dots" onClick={handleDots} />
        <Toggle />
      </Nav>
      <img className="product-details-page__image" src={activeProduct.image} alt="product" />
      <ProductDetails product={activeProduct} />
    </div>
  );
};

export default React.memo(ProductDetail); 