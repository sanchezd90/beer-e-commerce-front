import React from 'react';
import { Nav, Toggle, Avatar } from '../components';
import { ProductList } from '../components/organisms';
import menuIcon from '../assets/icons/menu-icon.svg';

const Products = () => {
  return (
    <div className="products-page">
      <Nav>
        <Toggle />
          <img src={menuIcon} alt="menu" />
        <Toggle />
        <Avatar />
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