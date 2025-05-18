import React from 'react';
import { Nav, Toggle, Avatar } from '../components';
import { ProductList } from '../components/index';
import menuIcon from '../assets/icons/menu-icon.svg';
import avatar from '../assets/icons/Sin título-1.jpg';

const Products = () => {
  return (
    <div className="products-page">
      <Nav>
        <Toggle>
          <img src={menuIcon} alt="menu" />
        </Toggle>
        <Toggle>
          <Avatar src={avatar} alt="avatar" />
        </Toggle>
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