import { Container, Row, Col } from 'react-bootstrap'

function Best2players(props) {

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
            <h4> TEST Best 2 players page </h4>            

            <Container>

                <Row>
                    {
                        bst2games.map(function(a,i){
                            return(
                                <Col sm key={i}>
                                    {/* <img onClick={() =>{navigate('./detail/'+i)}} src={"https://github.com/Yongho-Lee/jjongs_diary/blob/main/src/img/jjong" + (i +1) +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} /> */}
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