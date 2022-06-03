import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



function BestFamily(props) {

    let navigate = useNavigate();

    let games = props.allGames;

    let bstfamily = [];
    for(let i in games){                
        if(findFamily(games[i].type)){
            bstfamily.push(games[i])
        }
    }

    return(

        <>
        <div>
            <h4> Best Family Game page </h4>      


            <Container>

                <Row>
                    {
                        bstfamily.map(function(a,i){
                            return(
                                <Col sm key={i}>
                                    <img onClick={() =>{navigate('../detail/'+bstfamily[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + bstfamily[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'jjong'+i} />
                                    <h3> {bstfamily[i].name} </h3>
                                    <p> {bstfamily[i].price} </p>
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




function findFamily(games){
    if(games.indexOf('family') > -1){
        return true
    } else { return false }
}

export default BestFamily;