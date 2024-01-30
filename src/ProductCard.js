import './ProductCard.css';
import config from './config';


function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img src={ config.API_ROOT_PATH + product.imageUrl} alt={product.name} />
        <h3 >{product.name}</h3>
        <p >{product.price}</p>
      </div>
    );
  }

  export default ProductCard;