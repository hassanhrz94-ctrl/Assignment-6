import React, { use } from 'react';
import ProductCard from '../productCard/ProductCard';


const Products = ({productive}) => {
    
    const products = use(productive)
    console.log(products)
    
    return (
        <div>
            <h1></h1>{
                products.map(product=> 
                <div> 
                    
               <ProductCard product={product}></ProductCard>
                     </div>)
            }
        </div>
    );
};

export default Products;