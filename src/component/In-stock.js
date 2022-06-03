import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



function InStock(props) {

    let navigate = useNavigate();

    let games = props.allGames;

    let instkgames = [];
    for(let i in games){                
        if(games[i].stock > 1){
            instkgames.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> In Stock Board Games </h4>            

            <Container>

                <Row>
                    {
                        instkgames.map(function(a,i){
                            return(
                                <Col sm key={i}>
                                    <img onClick={() =>{navigate('../detail/'+instkgames[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + instkgames[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
                                    <h3> {instkgames[i].name} </h3>
                                    <p> {instkgames[i].price} </p>
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


export default InStock;