import { useEffect, useState } from 'react';
import './App.css';
import ComparisonTable from './ComparisonTable';
import ProductCard from './ProductCard';
import config from './config';


function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {

    fetch( config.API_ROOT_PATH +"/all" )
    .then( response => response.json() )
    .then( json => setProducts( json ))
    .catch( e => console.error(e));

    console.log("Promisas paleistas");
  }, [] );
  

  return (
    <div className="app">
      <h1>Compare Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
          <ComparisonTable products={products} />
    </div>
  );
}


export default App;







