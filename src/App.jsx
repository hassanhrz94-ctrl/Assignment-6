
import { Suspense } from 'react'
import './App.css'
import Footer from './component/footer/Footer'

import Navbar from './component/navbar/Navbar'
import Products from './component/products/Products'


const productsPromise = async()=>{
  const res = await fetch('/modal.json')
  return res.json();

}
const productive=productsPromise()

function App() {


  return (
    <>
     <Navbar/>

    <Suspense fallback={<h1>loading..</h1>}> <Products productive={productive}/></Suspense>
     
<Footer/>
     
    </>
  )
}

export default App
