import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Nav, ProductDetails, Toggle, Loader } from '../components/index';
import iconBack from '../assets/icons/icon-back.svg';
import iconDots from '../assets/icons/icon-dots.svg';

const ProductDetail = () => {    

  const navigate = useNavigate()

  const { id } = useParams();
  const [productId, _productBrand] = id.split(/-(.+)/)
  const { data: products, isLoading: loadingProducts } = useProducts(); 
  
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeSku, setActiveSku] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  
  useEffect(() => {
    if (productId && !loadingProducts && products) {
      const currentProduct = products.find((product) => product.id == productId);      
      if(currentProduct) {
        setActiveProduct(currentProduct); 
        setActiveSku(currentProduct.skus[0]);
      }else{
        setShouldRedirect(true);
      }
    }
  }, [productId,loadingProducts,products]);  

  const handleBack = () => {
    console.log('back');
    navigate(`/products`)
  }

  const handleDots = () => {
    alert('show options');
  }

  if (shouldRedirect) {
    return <Navigate to="/products" replace />;
  }

  if (loadingProducts || !activeProduct) {
    return <Loader />;
  }

  return (
    <div className="product-details-page">      
      <Nav>
        <Toggle onClick={handleBack}>
          <img src={iconBack} alt="back"  />
        </Toggle>        
        <p className="product-details-page__nav-text">Details</p>
        <Toggle onClick={handleDots}>
          <img src={iconDots} alt="dots"  />
        </Toggle>
      </Nav>
      <img 
        className="product-details-page__image" 
        src={`/src/assets${activeProduct?.image}`} 
        alt="product" 
      />
      <ProductDetails product={activeProduct} sku={activeSku} setSelectedSku={setActiveSku} />
    </div>
  );
};

export default ProductDetail; 