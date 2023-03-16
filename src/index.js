import React from 'react';
import ReactDOM from 'react-dom/client';
import FilterableProductTable from './Components/FilterableProductTable';
import PRODUCTS from './Components/data/Data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilterableProductTable products={PRODUCTS} />);
