import { useEffect, useState } from 'react';
import './App.css';
import ComparisonTable from './ComparisonTable';
import ProductCard from './ProductCard';

const busimiDuomenys = [
  {
    name: "Cherry",
    price: "$1.99",
    imageUrl: "/images/cherries.png",
  },
  {
    name: "Avocado",
    price: "$1.99",
    imageUrl: "/images/avocados.png",
  },
  {
    name: "Bananas",
    price: "$1.99",
    imageUrl: "/images/bananas.png",
  },
  {
    name: "Watermelon",
    price: "$1.99",
    imageUrl: "/images/watermelon.png",
  }
];



const fetchData = () => {
  return new Promise(  (resolve, reject) => {

    setTimeout( ()=> {
      const success = Math.random() > 0.3; //70% tikimybė, kad true 
      if(success){
        resolve(busimiDuomenys);
      } else{
        reject("Duomenų užkrauti nepavyko");
      }

    }, 1000 );

  } );
}



function App() {
  const [products, setProducts] = useState([]);

  useEffect( () => {

    fetchData()
    .then( d =>   setProducts( d ))
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







