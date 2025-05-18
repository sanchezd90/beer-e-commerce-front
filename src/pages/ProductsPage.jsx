import React from 'react';
import { Nav, Toggle, Avatar } from '../components';
import { ProductList } from '../components/index';

const Products = () => {

  const handleMenuClick = () => {
    alert('expand navbar');
  }

  const handleProfileClick = () => {
    alert('go to profile page');
  }

  return (
    <div className="container products-page">
      <Nav>
        <Toggle src={'/src/assets/icons/menu-icon.svg'} alt="menu" onClick={handleMenuClick} />
        <Avatar src={'/src/assets/icons/Sin título-1.jpg'} alt="avatar" onClick={handleProfileClick} />
      </Nav>
      <div className="products-page__header">
        <p className="products-page__header--gretting">Hi Mr. Michael</p>
        <h1>Welcome Back!</h1>
      </div>      
      <ProductList />      
    </div>
  );
};

export default Products; 