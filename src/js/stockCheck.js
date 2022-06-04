function stockCheck(n){
    if(n === 0) {
        return (            
            <p className="stock zeroStock"> Sold out </p>
        )
    } else if(n === 1) {
        return (
            <p className="stock onlyOneStock"> Only 1 unit left </p>
        )
    } else {
        return(
            <p className="stock moreStocks"> In stock, {n} units </p>
        )
    }
}


export default stockCheck;
