import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';

// redux3편 4분 12초 부터, 리덕스 수정

function Cart() {

    let state = useSelector((state)=>state);
    console.log(state.cart)


    return(
        <>
        <div className="body-margin"></div>
        <div>
            <h4> TEST Cart Page </h4>
            
        </div>

        <Table>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.cart.map((a,i)=> 
                    <tr key={i}>
                        <td>{state.cart[i].name}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    )
                }

                
  
            </tbody>
        </Table>


        </>
    )

}


export default Cart;