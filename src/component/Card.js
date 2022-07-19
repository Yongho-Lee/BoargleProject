import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import stockCheck from '../js/stockCheck';

import axios from 'axios';

function Card(props){
    let navigate = useNavigate();
    let lists = props.lists;
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
        
     

    </>


  
    )
  




  }


  // for checking list
//   function bogamelist(props){
    
//         console.log(props.boardGameList[1].data)
   
//   }



  export default Card;