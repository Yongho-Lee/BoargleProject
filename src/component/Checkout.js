import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Checkout() {

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [total, setTotal] = useState(0);

    useEffect(()=>{
        let tmp = 0;
        for(let i in state.cart){ 
            tmp += +(state.cart[i].totalPrice).toFixed(2);                      
        }
        setTotal(tmp.toFixed(2));
    },[])



        // 내가 만들었다가 지운거
            /* <div className="body-margin">
            <h4> Checkout Page</h4>

            <div className="container show-grid" style={{width: "900px"}}>
                <div className="row">
                    <div className="col-sm-9">Level 1: .col-sm-9
                    <div className="row">
                        <div className="col-lg-8 col-sm-6 checkoutList">
                        {
                            <Table>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                
                                    state.cart.map((a,i)=> 
                                    <tr key={i}>
                                        <td> <img className="product-image" onClick={() =>{navigate('../products/detail/'+state.cart[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + state.cart[i].shortName +".jpg?raw=true"} width="130px" height="100px" alt={'bgimage'+i} /> </td>
                                        <td style={{paddingTop:"30px"}}>{state.cart[i].name}</td>
                                        <td style={{paddingTop:"30px"}}>{state.cart[i].totalPrice}</td>
                                        <td style={{paddingTop:"30px"}}>
                                            <span className="cart-count">{state.cart[i].qty} </span> 
                                        </td>
                                    </tr>
                                    
                                    )
                
                                }


                                <tr>
                                     <td className="td-total-price" colSpan={3}> Total Price : </td>
                                     <td colSpan={1}> {total} </td>
                                </tr>
                
                
                                
                  
                            </tbody>
                        </Table>
                
                        }
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            Level 2: .col-xs-4 .col-sm-6
                        </div>
                    </div>
                </div>
            </div></div>



        </div> */











    return(        
        <>

    <div className="checkout-body">
    </div>

    <div class="container d-lg-flex">
            <div class="box-1 bg-light user">
                {/* <div class="d-flex align-items-center mb-3">
                    <img src="https://images.pexels.com/photos/4925916/pexels-photo-4925916.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        class="pic rounded-circle" alt=""/>
                    <p class="ps-2 name">Oliur</p>
                </div>
                <div class="box-inner-1 pb-3 mb-3 ">
                    <div class="d-flex justify-content-between mb-3 userdetails">
                        <p class="fw-bold">Lightroom Presets</p>
                        <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>33.00+</p>
                    </div>
                    <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                        data-bs-interval="2000">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    class="d-block w-100"/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/258092/pexels-photo-258092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    class="d-block w-100 h-100"/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    class="d-block w-100"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                            <div class="icon">
                                <span class="fas fa-arrow-left"></span>
                            </div>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                            <div class="icon">
                                <span class="fas fa-arrow-right"></span>
                            </div>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p class="dis info my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quos ipsa
                        sed officiis odio
                    </p>
                    <div class="radiobtn">
                        <input type="radio" name="box" id="one"/>
                        <input type="radio" name="box" id="two"/>
                        <input type="radio" name="box" id="three"/>
                        <label for="one" class="box py-2 first">
                            <div class="d-flex align-items-start">
                                <span class="circle"></span>
                                <div class="course">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="fw-bold">
                                            Collection 01
                                        </span>
                                        <span class="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                        <label for="two" class="box py-2 second">
                            <div class="d-flex">
                                <span class="circle"></span>
                                <div class="course">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="fw-bold">
                                            Collection 01
                                        </span>
                                        <span class="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                        <label for="three" class="box py-2 third">
                            <div class="d-flex">
                                <span class="circle"></span>
                                <div class="course">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <span class="fw-bold">
                                            Collection 01
                                        </span>
                                        <span class="fas fa-dollar-sign">29</span>
                                    </div>
                                    <span>10 x Presets. Released in 2018</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div> */}


{
                            <Table>

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                
                                    state.cart.map((a,i)=> 
                                    <tr key={i}>
                                        <td> <img className="product-image" onClick={() =>{navigate('../products/detail/'+state.cart[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + state.cart[i].shortName +".jpg?raw=true"} width="130px" height="100px" alt={'bgimage'+i} /> </td>
                                        <td style={{paddingTop:"30px"}}>{state.cart[i].name}</td>
                                        <td style={{paddingTop:"30px"}}>{state.cart[i].totalPrice}</td>
                                        <td style={{paddingTop:"30px"}}>
                                            <span className="cart-count">{state.cart[i].qty} </span> 
                                        </td>
                                    </tr>
                                    
                                    )
                
                                }


                                <tr>
                                     <td className="td-total-price" colSpan={3}> Total Price : </td>
                                     <td colSpan={1}> {total} </td>
                                </tr>
                
                
                                
                  
                            </tbody>
                        </Table>
                
                        }
            </div>

            
            <div class="box-2">
                <div class="box-inner-2">
                    <div>
                        <p class="fw-bold">Payment Details</p>
                        <p class="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div>
                    <form action="">
                        <div class="mb-3">
                            <p class="dis fw-bold mb-2">Email address</p>
                            <input class="form-control" type="email" value="luke@skywalker.com"/>
                        </div>
                        <div>
                            <p class="dis fw-bold mb-2">Card details</p>
                            <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                                <div class="fab fa-cc-visa ps-3"></div>
                                <input type="text" class="form-control" placeholder="Card Details"/>
                                <div class="d-flex w-50">
                                    <input type="text" class="form-control px-0" placeholder="MM/YY"/>
                                    <input type="password" maxLength="3" class="form-control px-0" placeholder="CVV"/>
                                </div>
                            </div>
                            <div class="my-3 cardname">
                                <p class="dis fw-bold mb-2">Cardholder name</p>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="address">
                                <p class="dis fw-bold mb-3">Billing address</p>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected hidden>United States</option>
                                    <option value="1">India</option>
                                    <option value="2">Australia</option>
                                    <option value="3">Canada</option>
                                </select>
                                <div class="d-flex">
                                    <input class="form-control zip" type="text" placeholder="ZIP"/>
                                    <input class="form-control state" type="text" placeholder="State"/>
                                </div>
                                <div class=" my-3">
                                    <p class="dis fw-bold mb-2">VAT Number</p>
                                    <div class="inputWithcheck">
                                        <input class="form-control" type="text" value="GB012345B9"/>
                                        <span class="fas fa-check"></span>

                                    </div>
                                </div>
                                <div class="d-flex flex-column dis">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <p>Subtotal</p>
                                        <p><span class="fas fa-dollar-sign"></span> {total}</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <p>VAT<span>(20%)</span></p>
                                        <p><span class="fas fa-dollar-sign"></span>2.80</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <p class="fw-bold">Total</p>
                                        <p class="fw-bold"><span class="fas fa-dollar-sign"></span> 어쨋든가격</p>
                                    </div>
                                    <div class="btn btn-primary mt-2">Pay<span class="fas fa-dollar-sign px-1"></span>35.80
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>


        

    )

}


export default Checkout;