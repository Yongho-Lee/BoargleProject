import { useEffect } from 'react';

import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { increaseCount, decreaseCount, loadPrvList, removeItem } from './../store/cartSlice.js';
//import { changeName, changeAge } from './../store/userSlice.js';





// redux3편 4분 12초 부터, 리덕스 수정

function Cart() {

    let state = useSelector((state)=>state);
    //console.log(state.cart)
    let dispatch = useDispatch();


    // useEffect(()=>{
    //     let storage = localStorage.getItem('prodCart')
    //     storage = JSON.parse(storage)        

    //     console.log("storage in cart .js")
    //     console.log(storage[0])
    //     if(storage[0] == null) {
    //         console.log("storage비어잇음")
    //     }else{
    //         console.log("storage 차있음")
    //         console.log(storage[0])
    //     }
    // })

    useEffect(()=>{
        //console.log(localStorage.getItem('prodCart'))
        let storage = localStorage.getItem('prodCart')
        storage = JSON.parse(storage)
        if(storage != null){
            // console.log("storage is not null")
            // console.log(storage.length)

            dispatch(loadPrvList(storage))
            // console.log("if문 안 쪽 state")
            // console.log(state.cart[0])
        }
        
        // it occurs error because storage is not defined or null
        // console.log("if문 밖 스토리지 길이")
        // console.log(storage.length)
        // console.log(storage)


        // state[0] is not the one i found state.cart[0] 
        // 일일이 for문으로 넣지 않으면 state.cart[0]에 이중배열이 되어버림
        // state.cart[0][1] 이런식으로 찾아가야 만 함
        // 따라서 위에 loadPrvlist의 함수 안에서는 무조건 for문으로 불러와야함.

        // console.log("if 밖 state[0]")
        // console.log(state.cart[0])

        // console.log(storage.length)
        // console.log(state.cart)

    },)


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
                    <th>remove</th>
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
                            <span className="cart-count">{state.cart[i].qty} </span> 
                            <button onClick={()=>{
                                    dispatch(increaseCount(state.cart[i].id))
                                }}>
                                    +
                            </button>
                        </td>
                        <td> <button onClick={()=>{
                                    dispatch(removeItem(state.cart[i].id))
                            }}> x 
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