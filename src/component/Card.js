import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


function Card(props){
    let navigate = useNavigate();
    let lists = props.lists;

    return(
      <>


        <p className="card-newArrivals"> New Arrivals Here </p>


        {/* { 
            bogamelist(props)
        }
             */}

            
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

            <p> Board Game Lists Here </p>
            <Row>

            {
                lists[1].data.map(function(a,i){
                    return(
                        <Col sm key={i}>           
                            {/* <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} /> */}
                            <h4> {lists[1].data[i].name} </h4>
                            <p> {lists[1].data[i].price} </p>
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