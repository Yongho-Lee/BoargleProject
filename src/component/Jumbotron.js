import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

function Jumbotron(props) {


    let navigate = useNavigate();
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
                    onClick={() =>{navigate('../products/detail/817054010004')}}
                    />
                    <Carousel.Caption>
                    <a href="../products/detail/817054010004">
                        <h3>Twilight Struggle</h3>
                    </a>
                    <p># Best 2 Players Game  # Strategy  # 90 ~ 120 Min</p>
                    </Carousel.Caption>                    
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="jumbo-carousel-box">
                    <img
                    className="Jumbo-Slide-img"
                    src={require("../img/jb-puerto-rico.jpg")}
                    alt="Second slide"
                    onClick={() =>{navigate('../products/detail/655132001953')}}
                    />

                    <Carousel.Caption>
                    <a href="../products/detail/655132001953">
                        <h3>Puerto Rico</h3>
                    </a>
                    <p> # 12 +  # 90 Min  # 3 - 5 Players </p>
                    </Carousel.Caption>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div className="jumbo-carousel-box">

                    <img
                    className="Jumbo-Slide-img"
                    src={require("../img/jb-roll-for-galaxy.jpg")}
                    alt="Third slide"
                    onClick={() =>{navigate('../products/detail/655132004923')}}
                    />

                    <Carousel.Caption>
                    <a href="../products/detail/655132004923">
                        <h3 className="jumbo-caption jumbo-caption-RollForGal">Roll For The GALAXY</h3>
                    </a>
                    <p>
                        # 13 +  # 45 Min  # 2 - 5 Players
                    </p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>






       
        </>
    )

}

export default Jumbotron;

