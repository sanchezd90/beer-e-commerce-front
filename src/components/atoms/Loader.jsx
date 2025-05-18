import React from 'react';
import PropTypes from 'prop-types';
export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>    
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
}
