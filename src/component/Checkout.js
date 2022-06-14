import { useSelector, useDispatch } from 'react-redux';
import Listing from './Listing';

function Checkout() {

    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    return(

        <>
        <div className="body-margin">
            <h4> Checkout Page</h4>

            <div class="container show-grid" style={{width: "900px"}}>
                <div class="row">
                    <div class="col-sm-9">Level 1: .col-sm-9
                    <div class="row">
                        <div class="col-xs-8 col-sm-6">
                        {
                            <Listing list={state.cart} />
                        }
                        </div>
                        <div class="col-xs-4 col-sm-6">
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