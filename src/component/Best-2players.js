import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



function Best2players(props) {

    let navigate = useNavigate();

    let games = props.allGames;

    let bst2games = [];
    for(let i in games){                
        if(games[i].bestPlayer == 2){
            bst2games.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> Best 2 players page </h4>            

            <Container>

                <Row>
                    {
                        bst2games.map(function(a,i){
                            return(
                                <Col sm key={i}>
                                    <img onClick={() =>{navigate('../detail/'+bst2games[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + bst2games[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
                                    <h3> {bst2games[i].name} </h3>
                                    <p> {bst2games[i].price} </p>
                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
     
        </div>


        </>
    )

}


export default Best2players;