import Carousel from 'react-bootstrap/Carousel';

function jumbotron(props) {



    return(
        <>
        {/* <div>
            <div className="main-bg">
            </div>
            <div></div>
        </div> */}
        <Carousel fade>
            <Carousel.Item>
                <div className="jumbo-carousel-box">
                    <img
                    className="Jumbo-Slide-img"
                    src={require("../img/jb-twilight-struggle2.jpg")}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Twilight Struggle</h3>
                    <p># Best 2 Player Game # Strategy # 1 ~ 2 hours</p>
                    </Carousel.Caption>                    
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="jumbo-carousel-box">
                    <img
                    className="Jumbo-Slide-img"
                    src={require("../img/jb-twilight-struggle2.jpg")}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="jumbo-carousel-box">

                    <img
                    className="Jumbo-Slide-img"
                    src={require("../img/jb-twilight-struggle2.jpg")}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>



{/* 
        <div className="slider">
                <input type="radio" name="slide" id="slide1" />  
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
                    <label for="slide1"> &nbsp; </label>
                    <label for="slide2"> &nbsp; </label>
                    <label for="slide3"> &nbsp; </label>
                    <label for="slide4"> &nbsp; </label>
                </div>


            </div>   */}




       
        </>
    )

}

export default jumbotron;



// <div>
// <div>
//     <input></input>
//     <input></input>
//     <input></input>
//     <input></input> 
//     <div className="main-bg">

//     </div>
// </div>     

// <div className="slider">
//     <input type="radio" name="slide" id="slide1" checked />
//     <input type="radio" name="slide" id="slide2" /> 
//     <input type="radio" name="slide" id="slide3" /> 
//     <input type="radio" name="slide" id="slide4" /> 
//     <ul id="imgholder" className="imgs">
//         <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
//         <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
//         <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt="" /></li>
//         <li><img src={require("../img/jb-twilight-struggle2.jpg")} alt=""/></li>
//     </ul>
//     <div className="bullets">
//         <label for="slide1">&nbsp;</label>
//         <label for="slide2">&nbsp;</label>
//         <label for="slide3">&nbsp;</label>
//         <label for="slide4">&nbsp;</label>
//     </div>
// </div>
// </div>