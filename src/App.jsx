
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './component/footer/Footer'

import Navbar from './component/navbar/Navbar'
import Products from './component/products/Products'
import Cart from './component/cart/Cart'


const productsPromise = async()=>{
  const res = await fetch('/modal.json')
  return res.json();

}
const productive=productsPromise();

function App() {
  
  const[isActiveTab,setActiveTab] =useState('product')
  console.log(isActiveTab)


  return (
    <>
     <Navbar/>


     {/* name of each tab group should be unique */}
<div className="tabs tabs-box">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked onClick={()=>setActiveTab('product')}/>
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart" onClick={()=>setActiveTab('cart')}  />

</div>

    <Suspense fallback={<h1>loading..</h1>}> {isActiveTab === 'product' && <Products productive={productive}/>}</Suspense>
    

    {isActiveTab === 'cart' && <Cart/>}
     
<Footer/>
     
    </>
  )
}

export default App
