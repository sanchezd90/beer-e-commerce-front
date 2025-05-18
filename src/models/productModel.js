import PropTypes from 'prop-types';


export const SkuPropTypes = {
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.number,
    price: PropTypes.number,
}

export const ProductPropTypes = {
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    substyle: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    rating: PropTypes.number,
    skus: PropTypes.arrayOf(SkuPropTypes).isRequired,
};

