import { Container, Row, Col } from 'react-bootstrap'

function AllGames(props) {

    const games = props.allGames;
    return(

        <>
        <div>
            <h4> All-Games Page </h4>
            
        </div>

        <Container>
            <Row>
                {
                    games.map(function(a,i){
                        return(
                            <Col sm key={i}>
                                 {/* <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} /> */}
                                <h3> {games[i].name} </h3>
                                <p> {games[i].price} </p>
                            </Col>
                        )
                    })
                }
            </Row>

        </Container>
     

        </>
    )

}



export default AllGames;