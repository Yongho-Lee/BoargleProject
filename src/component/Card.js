import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import stockCheck from '../js/stockCheck';

import "slick-carousel/slick/slick.css";
import "../slick-theme.css";
import Slider from "react-slick";



function Card(props){
    let navigate = useNavigate();
    let games = props.allGames;


    let bstStrategy = [];
    for(let i in games){                
        if(findStrategy(games[i].bestSelling)){
            bstStrategy.push(games[i])
        }
    }

    function findStrategy(games){
        if(games.indexOf('strategy') > -1){
            return true
        } else { return false }
    }



    let bstFamily = [];
    for(let i in games){                
        if(findFamily(games[i].type)){
            bstFamily.push(games[i])
        }
    }

    function findFamily(games){
      if(games.indexOf('family') > -1){
          return true
      } else { return false }
  }
  

    const settings = {
        dots: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <button className="Prev"><i className="fa-solid fa-arrow-left-to-line"></i></button>,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return(
      <>
        <div className='card-top-title'>
          <p> Recently Best Selling Games</p>
          <hr></hr>
        </div>
        
        <div className="container card-container strategy-top-container"> 
          <div className='left-text' >
            <div className="left-text-cover">
              <h2 className="card-newArrivals"> Strategy Games </h2>
              <button className="card-category-btn strategy-card-btn" onClick={()=>{ navigate('/products/best-strategy')}}> Shop Strategy Games </button>
            </div>
          </div>

          <div className="container list-Container strategy-container">
            <div className="card-box strategy-card">
              <div className='right-card' >
                  <Slider {...settings}>

                  {
                      bstStrategy.map(function(a,i){
                          return(
                              <div key={i} className="product-info card-product-info sm">
                                  <img className="card-product-image" onClick={() =>{navigate('./products/detail/'+bstStrategy[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/BoargleProject/main/src/img/bgImage/" + bstStrategy[i].shortName +".jpg?raw=true"}  alt={'bgimage'+i} />
                                  <p className="product-name card-product-name"> {bstStrategy[i].name} </p>                                    
                                  <p className="product-price"> ${bstStrategy[i].price} CAD </p>
                                  {stockCheck(bstStrategy[i].stock)}
                              </div>
                          )
                      })
                  }

                  </Slider>
              </div>
            </div>
          </div>      
        </div>

        <br/>

        <div className="container card-container family-top-container">
            <div className='left-text' >
              <div className="left-text-cover">
                <p className="card-newArrivals"> Family Games </p>
                <button className="card-category-btn family-card-btn" onClick={()=>{ navigate('/products/best-family')}}> Shop Family Games </button>
              </div>
            </div>
          <div className="container list-Container family-container">
            <div className="card-box family-card">
              <div className='right-card' >
                <Slider {...settings}>

                  {
                      bstFamily.map(function(a,i){
                          return(
                              <Col key={i} className="product-info card-product-info sm">
                                  <img className="card-product-image" onClick={() =>{navigate('./products/detail/'+bstFamily[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/BoargleProject/main/src/img/bgImage/" + bstFamily[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />
                                  <p className="product-name card-product-name"> {bstFamily[i].name} </p>                                    
                                  <p className="product-price"> ${bstFamily[i].price} CAD </p>
                                  {stockCheck(bstFamily[i].stock)}
                              </Col>
                          )
                      })
                  }
                  </Slider>
                </div>
              </div>
              
            </div>
          </div>
          




    </>


  
    )
  




  }




  export default Card;

  /*
  
  ????????? ?????? ???????????????
????????? ?????? ?????? ?????? ????????? ??? ?????? ????????? ??????.

????????? ????????? ?????? ?????? ?????? ????????? ?????? ????????? ?????? ??? ????????? (????????? ?????? ??????)
???????????? ??? ????????? ????????? ??????.

?????? axios??? ????????? ????????? ??????????
?????? ????????? ????????? ??????????????? ??? ??????.

4?????? ??????

4?????? ?????? ?????? ?????? 
????????? ????????? useState??? ??? ???????????? ??????????????? ??????

?????? ??????, ????????? ????????? ?????? ????????? ???????????? ?????? ?????? ????????? ???????????? ??????.


??????: ??????, ??????, ?????????, ?????????, ??????, ??????
??????: ??????, ??????1, ?????????, ?????????, ????????????, ?????????






??? ???????????? 4???
===????????? ????????????
????????? ?????? react slick carousel arrow previous button ????????? ?????????.
  
  
  */

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (

        
//       <button
//         className={className}
//         style={{ ...style, background: "rgb(44,183,248)"}}
//         onClick={onClick}
//       > </button> 
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style,  background: "rgb(44,183,248)" }}
//         onClick={onClick}
//       />
//     );
//   }
  


/*  ?????? ????????? ?????????.
  <>

  <p> Recently Best Selling Games</p>
  <p className="card-newArrivals"> Strategy Games </p>

  <Container className="list-Container">
      <Row xs={1} md={4} lg={5} className="list-Container">
  {
      bstStrategy.map(function(a,i){
          return(
              <Col sm key={i} className="product-info">
                  <img className="product-image" onClick={() =>{navigate('./products/detail/'+bstStrategy[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/BoargleProject/main/src/img/bgImage/" + bstStrategy[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />
                  <p className="product-name"> {bstStrategy[i].name} </p>                                    
                  <p className="product-price"> ${bstStrategy[i].price} CAD </p>
                  {stockCheck(bstStrategy[i].stock)}
              </Col>
          )
      })
  }
      </Row>

    <Row>
      <p> Family Games </p>

    </Row>
    
    <Row xs={1} md={4} lg={5} className="list-Container">
  {
      bstFamily.map(function(a,i){
          return(
              <Col sm key={i} className="product-info">
                  <img className="product-image" onClick={() =>{navigate('./products/detail/'+bstFamily[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/BoargleProject/main/src/img/bgImage/" + bstFamily[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />
                  <p className="product-name"> {bstFamily[i].name} </p>                                    
                  <p className="product-price"> ${bstFamily[i].price} CAD </p>
                  {stockCheck(bstFamily[i].stock)}
              </Col>
          )
      })
  }
      </Row>

      <div>
      <h2> Single Item</h2>
      <Slider {...settings}>

  {
      bstStrategy.map(function(a,i){
          return(
              <div sm key={i} className="product-info">
                  <img className="product-image" onClick={() =>{navigate('./products/detail/'+bstStrategy[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/BoargleProject/main/src/img/bgImage/" + bstStrategy[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />
                  <p className="product-name"> {bstStrategy[i].name} </p>                                    
                  <p className="product-price"> ${bstStrategy[i].price} CAD </p>
                  {stockCheck(bstStrategy[i].stock)}
              </div>
          )
      })
  }

      </Slider>
  </div>
  
  </Container>
  




</>

*/