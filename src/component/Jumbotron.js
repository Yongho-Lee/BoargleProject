
function jumbotron(props) {

    return(

        <div>
            <div className="slider">
                {/* <input></input>
                <input></input>
                <input></input>
                <input></input> */}
                <div className="main-bg">

                </div>
            </div>     

            <div className="slider">
                <input type="radio" name="slide" id="slide1" checked />
                <input type="radio" name="slide" id="slide2" /> 
                <input type="radio" name="slide" id="slide3" /> 
                <input type="radio" name="slide" id="slide4" /> 
                <ul id="imgholder" className="imgs">
                    <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
                    <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
                    <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
                    <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt=""/></li>
                </ul>
                <div className="bullets">
                    <label for="slide1">&nbsp;</label>
                    <label for="slide2">&nbsp;</label>
                    <label for="slide3">&nbsp;</label>
                    <label for="slide4">&nbsp;</label>
                </div>
            </div>
        </div>
    )

}

export default jumbotron;
