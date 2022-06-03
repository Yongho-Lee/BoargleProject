import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



function AllGames(props) {

    let navigate = useNavigate();

    const games = props.allGames;
    return(

        <>
        <div>
            <h4> All-Games Page </h4>
            {
                console.log('test message')
            }
            
        </div>

        <Container>
            <Row>
                {
                    games.map(function(a,i){
                        return(
                            <Col sm key={i}>
                                <img onClick={() =>{navigate('../detail/'+games[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + games[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
                                <h3> {games[i].name} </h3>
                                <p> {games[i].price} </p>
                                <p> {games[i].stock} Units </p>
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