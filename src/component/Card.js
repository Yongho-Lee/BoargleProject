import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function Card(props){
    //let navigate = useNavigate();
  
    return(
      <>


        <p className="card-newArrivals"> New Arrivals Here </p>


        {
            bogamelist(props)
        }
            

            
        <Container>
            <Row>
        {
          props.boardGameList[0].data.map(function(a,i){
            return(
                <Col sm key={i}>           
                    {/* <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} /> */}
                    <h4> {props.boardGameList[0].data[i].name} </h4>
                    <p> {props.boardGameList[0].data[i].price} </p>
                </Col>                     
            )
          })
  
        }
            </Row>

            <p> Board Game Lists Here </p>
            <Row>

            {
                props.boardGameList[1].data.map(function(a,i){
                    return(
                        <Col sm key={i}>           
                            {/* <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} /> */}
                            <h4> {props.boardGameList[1].data[i].name} </h4>
                            <p> {props.boardGameList[1].data[i].price} </p>
                        </Col>                     
                    )
          })
  
        }
            </Row>
        </Container>
     

    </>


  
    )
  




  }

  function bogamelist(props){
    
        console.log(props.boardGameList[1].data)
   
  }

  export default Card;