import React, { use } from 'react';
import ProductCard from '../productCard/ProductCard';


const Products = ({productive, carts, setCarts}) => {
    
    const products = use(productive)
    console.log(products)
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
            {
                products.map(product=> 
                <div> 
                    
               <ProductCard product={product} carts={carts} setCarts={setCarts}></ProductCard>
                     </div>)
            }
        </div>
    );
};

export default Products;