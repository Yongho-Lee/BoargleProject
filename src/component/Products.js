import { Outlet } from "react-router-dom";

function Products(props){
    return(
        <>
        <div className="body-margin">
        </div>
        <Outlet></Outlet>


        </>
    
    )
}

// function bogamelist(props){
    
//     console.log(props.list[1].data[0])

// }


export default Products;