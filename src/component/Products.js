import { Outlet } from "react-router-dom";

function Products(){
    return(
        <>
        <div className="products-page">
        </div>
        <Outlet></Outlet>
        </>
    
    )
}

export default Products;