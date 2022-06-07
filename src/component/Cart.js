import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
//import { changeName, changeAge } from './../store/userSlice.js';
import { increaseCount, decreaseCount } from './../store/cartSlice.js';


// redux3편 4분 12초 부터, 리덕스 수정

function Cart() {

    let state = useSelector((state)=>state);
    //console.log(state.cart)
    let dispatch = useDispatch();


    return(
        <>
        <div className="body-margin"></div>
        <div>
            <h4> Cart </h4>
            
        </div>

        
        {/*    //////// TEST CART LISTS   ////// 
        <p> {state.user[1].name}</p>
        <p> {state.user[1].age}</p>
        <button onClick={()=>{
            dispatch(changeName(1))
        }}></button> <br/>
                <button onClick={()=>{
            dispatch(changeAge(2))
        }}></button>
        <p> {state.cart[0].stock}</p> */}

        <Table>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((a,i)=> 
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{state.cart[i].name}</td>
                        <td> <button onClick={()=>{
                                    dispatch(decreaseCount(state.cart[i].id))
                                }}>
                                    -
                            </button>
                            <span className="cart-count">{state.cart[i].stock} </span> 
                            <button onClick={()=>{
                                    dispatch(increaseCount(state.cart[i].id))
                                }}>
                                    +
                            </button>
                        </td>
                    </tr>
                    )
                }

                
  
            </tbody>
        </Table>


        </>
    )

}
//

export default Cart;