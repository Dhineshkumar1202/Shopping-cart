import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function Product({cart,setCart}) {
   let [toggle,setToggle] = useState(true)
   const [rating, setRating] = useState(0)

   const handleRating = (rate)=>{
    setRating(rate)
   }
  return <>
  
   <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Fancy Product</h5>
                                    $40.00 - $80.00
                                </div>
                                
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    View Option</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Special Item</h5>
                              
                                <Rating onClick={handleRating} initialValue={rating} size={20} /><br />
                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                $18.00
                                </div>
                                
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Sale Item</h5>
                                <span class="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                                </div>
                              
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Popular Item</h5>
                                   
                                    <Rating onClick={handleRating} initialValue={rating} size={20} /><br />
                                    $40.00
                                </div>
                                
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Sale Item</h5>
                                <span class="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                                </div>
                              
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Fancy Product</h5>
                                $120.00 - $280.00
                                </div>
                           
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    View Option</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Special Item</h5>
                                   
                                    <Rating onClick={handleRating} initialValue={rating} size={20}/><br />
                                    <span class="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                                
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                          <div class="card-body p-4">
                                <div class="text-center">
                                <h5 class="fw-bolder">Popular Item</h5>
                                <Rating onClick={handleRating} initialValue={rating} size={20} /><br />
                                    $40.00 
                                
                                </div>
                                
                                
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               {
                                toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart +1)
                                    setToggle(prev=>!prev)
                                }}>
                                    Add To Cart</button></div>:

                                <div class="text-center"><button class="btn btn-dark mt-auto"
                                onClick={()=>{
                                    setCart(cart -1)
                                    setToggle(prev =!prev)
                                }}>
                                    Remove From Cart</button></div>
                               }
                            </div>
                        </div>
    </div>
  
  </>
}
