import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Checkout() {

    let state = useSelector((state)=>state);
    //let dispatch = useDispatch();
    let navigate = useNavigate();

    let [ subTotal, setSubTotal] = useState(0);
    let [ vat, setVat ] = useState(0);
    let [ total, setTotal ] = useState(0);

    useEffect(()=>{
        let tmp = 0;
        for(let i in state.cart){ 
            tmp += +(state.cart[i].totalPrice).toFixed(2);                      
        }
        setSubTotal(tmp.toFixed(2));
        setVat((tmp * 0.13).toFixed(2))
        let totalTmp = +(tmp + vat).toFixed(2);
        setTotal(totalTmp)


    },[])




//     Checkout 버튼을 누르면 
// state정보와 localStorage 정보가 같이 넘어감.
// 거기서 정보를 취합해서 값을 알려주고 결제 정보 frame을 같이 띄워줌.
// 거기서 확인을 누르면, 
// state정보와 localStorage정보가 전부 지워짐.


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

    <div className="checkbox-container d-lg-flex">
            <div className="box-1 bg-light user">
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
                            <Table className="box-inner-1">

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
                                        <td> <img className="checkout-image" onClick={() =>{navigate('../products/detail/'+state.cart[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + state.cart[i].shortName +".jpg?raw=true"} width="130px" height="100px" alt={'bgimage'+i} /> </td>
                                        <td style={{paddingTop:"30px"}} className="">{state.cart[i].name}</td>
                                        <td style={{paddingTop:"30px"}}>{state.cart[i].totalPrice}</td>
                                        <td style={{paddingTop:"30px"}}>
                                            <span className="cart-count">{state.cart[i].qty} </span> 
                                        </td>
                                    </tr>
                                    
                                    )
                
                                }


                                <tr>
                                     <td className="td-total-price" colSpan={3}> Total Price : </td>
                                     <td colSpan={1}> {subTotal} </td>
                                </tr>
                
                
                                
                  
                            </tbody>
                        </Table>
                
                        }
            </div>

            
            <div className="box-2">
                <div className="box-inner-2">
                    <div>
                        <p className="fw-bold">Payment Details</p>
                        <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                    </div>
                    <form action="">
                        <div className="mb-3">
                            <p className="dis fw-bold mb-2">Email address</p>
                            <input className="form-control" type="email" placeholder="Boargle!@boargle.com" required/>
                        </div>
                        <div>
                            <p className="dis fw-bold mb-2">Card details</p>
                            <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                <div className="fab fa-cc-visa ps-3"></div>
                                <input type="text" className="form-control" placeholder="Card Details"/>
                                <div className="d-flex w-50">
                                    <input type="text" className="form-control px-0" placeholder="MM/YY" required/>
                                    <input type="password" maxLength="3" className="form-control px-0" placeholder="CVV" required/>
                                </div>
                            </div>
                            <div className="my-3 cardname">
                                <p className="dis fw-bold mb-2">Cardholder name</p>
                                <input className="form-control" type="text" required/>
                            </div>
                            <div className="address">
                                <p className="dis fw-bold mb-3">Billing address</p>
                                <select className="form-select" aria-label="Default select example" defaultValue={"default"}>
                                    <option value={"default"} disabled hidden>Canada</option>
                                    <option value="1">Canada</option>
                                    <option value="2">United States</option>
                                    <option value="3">Australia</option>
                                </select>
                                <div className="d-flex">
                                    <input className="form-control zip" type="text" placeholder="ZIP"/>
                                    <input className="form-control state" type="text" placeholder="State"/>
                                </div>
                                <div className=" my-3">
                                    <label className="dis fw-bold mb-2" htmlFor="fname"> Shipping Address </label>
                                        <input className="form-control" type="text" id="fname" name="fname" placeholder="Shipping address" required/>
                                </div>
                                <div className="d-flex flex-column dis">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>Subtotal</p>
                                        <p><span className="fas fa-dollar-sign"></span> {subTotal}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p>Taxes (estimated) <span>(13%)</span></p>
                                        <p><span className="fas fa-dollar-sign"></span>{vat}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <p className="fw-bold">Total</p>
                                        <p className="fw-bold"><span className="fas fa-dollar-sign"></span> {total}</p>
                                    </div>
                                    <div className="btn btn-primary mt-2" onClick={()=>{ navigate('/confirm')}}>Pay<span className="fas fa-dollar-sign px-1"></span>{total}
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