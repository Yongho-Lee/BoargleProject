import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Confirm() {

    let state = useSelector((state)=>state);
    let navigate = useNavigate();

    useEffect(()=>{
        setTimeout(redirect, 3000)
    },[])

    function redirect() {
        navigate("/")
    }

    return(

        <>
        <div style={ {marginTop: "60px"}}>
            <h4> Thank you for your order </h4>
            <p> redirect in 5 seconds . . . </p>
            
        </div>


        </>
    )

}


export default Confirm;