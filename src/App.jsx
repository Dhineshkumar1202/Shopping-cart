import React,{useState} from 'react'
import TopBar from './components/TopBar'
import Product from './components/Product'


 function App() {
  let [cart,setCart] = useState(0)
  return <>
  
  <TopBar cart={cart}/>
  <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Product cart={cart} setCart ={setCart}/>
               
                
                  <div/>
                </div>
            </div>
  </section>
  <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
  </>
}


export default App