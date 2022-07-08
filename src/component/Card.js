import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Card(props){
    let navigate = useNavigate();
    let lists = props.lists;

    return(
      <>
        <p className="card-newArrivals"> New Arrivals Here </p>
            
        <Container>
          <Row>
        {
          lists[0].data.map(function(a,i){
            let bcd = lists[0].data[i].id;
            let name = lists[0].data[i].shortName;

            return(
                <Col sm key={i}>           
                    <img onClick={() =>{navigate('./products/detail/'+bcd)}} src={require("../img/bgImage/"+ name +".jpg?raw=true")} width="250px" height="200px" alt={'bgimage'+i} className="product-image"/>
                    <h4> {lists[0].data[i].name} </h4>
                    <p> {lists[0].data[i].price} </p>
                </Col>                     
            )
          })
  
        }
          </Row>
          <Row>
            <p> Best Selling Family Games </p>

          </Row>
          
          <Row>
          {/* {
            <BestFamily lists={lists}/>
  
          } */}

          <Col sm key={1}>           
                    <img onClick={() =>{navigate('./products/detail/29877030712')}} src={require("../img/bgImage/catan.jpg?raw=true")} width="250px" height="200px" alt={'bestGame1'} className="product-image" />
                    <h4> {lists[0].data[5].name} </h4>
                    <p> {lists[0].data[5].price} </p>
          </Col>     
          

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