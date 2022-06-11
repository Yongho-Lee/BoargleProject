import { useSelector, useDispatch } from 'react-redux';
import Listing from './Listing';

function Checkout() {

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    return(

        <>
        <div className="body-margin">
            <h4> Checkout Page</h4>

            {
                <Listing list={state.cart} />
            }

        </div>


        </>
    )

}


export default Checkout;