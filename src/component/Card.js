import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import stockCheck from '../js/stockCheck';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
        </Container>
        


        <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
            </Slider>
        </div>
        

    </>


  
    )
  




  }


  // for checking list
//   function bogamelist(props){
    
//         console.log(props.boardGameList[1].data)
   
//   }



  export default Card;

  /*
  
  베스트 셀링 패밀리게임
베스트 셀링 전략 게임 이렇게 두 줄로 나오게 하자.

리스트 목록을 아예 새로 따서 베스트 샐링 패밀리 게임 두 페이지 (넘기기 버튼 사용)
전략게임 두 페이지 이렇게 사용.

굳이 axios를 사용할 필요가 있는가?
그냥 목록에 베스트 셀링이라는 걸 넣자.

4개씩 두줄

4개가 먼저 노출 되고 
버튼을 누르면 useState로 그 다음번째 아이템들이 노출

이거 말고, 버튼을 누르면 앞에 하나가 사라지고 우측 줄이 하나씩 들어오는 방식.


전략: 황투, 푸코, 버건디, 쓰루디, 파그, 아콜
가족: 카탄, 팬레1, 윙스팬, 퀘들린, 스플랜더, 티투알






첫 어레이에 4개
===위에는 개소리고
리엑트 슬릭 react slick carousel arrow previous button 이거로 해보자.
  
  
  */