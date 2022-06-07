import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

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
                    <img onClick={() =>{navigate('./products/detail/'+bcd)}} src={require("../img/bgImage/"+ name +".jpg?raw=true")} width="250px" height="200px" alt={'bgimage'+i} />
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