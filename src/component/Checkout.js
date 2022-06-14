import { useSelector, useDispatch } from 'react-redux';
import Listing from './Listing';

function Checkout() {

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    return(

        <>
        <div className="body-margin">
            <h4> Checkout Page</h4>

            <div className="container show-grid" style={{width: "900px"}}>
                <div className="row">
                    <div className="col-sm-9">Level 1: .col-sm-9
                    <div className="row">
                        <div className="col-lg-8 col-sm-6 checkoutList">
                        {
                            <Listing list={state.cart} />
                        }
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            Level 2: .col-xs-4 .col-sm-6
                        </div>
                    </div>
                </div>
            </div></div>



        </div>


        </>
    )

}


export default Checkout;