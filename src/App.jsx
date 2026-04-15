
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './component/footer/Footer'

import Navbar from './component/navbar/Navbar'
import Products from './component/products/Products'
import Cart from './component/cart/Cart'
import { ToastContainer } from 'react-toastify'
import GetStarted from './getStarted/GetStarted'


const productsPromise = async()=>{
  const res = await fetch('/modal.json')
  return res.json();

}
const productive=productsPromise();

function App() {
  
  const[isActiveTab,setActiveTab] =useState('product')
  
const[carts,setCarts]=useState([])
console.log(carts)

  return (
    <>
     <Navbar/>
        <ToastContainer />

     {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center text-blue-700 ">
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Products" defaultChecked onClick={()=>setActiveTab('product')}/>
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart" onClick={()=>setActiveTab('cart')}  />

</div>

    <Suspense fallback={<h1>loading..</h1>}> {isActiveTab === 'product' && <Products productive={productive} carts={carts} setCarts={setCarts}/>}</Suspense>
    

    {isActiveTab === 'cart' && <Cart carts={carts} setCarts={setCarts}/>}
     <GetStarted/>
<Footer/>
     
    </>
  )
}

export default App
