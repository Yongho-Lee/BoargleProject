import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Listing from './Listing.js'

function BestStrategy(props) {

    let navigate = useNavigate();

    let games = props.allGames;

    let bstStrategy = [];
    for(let i in games){                
        if(findFamily(games[i].type)){
            bstStrategy.push(games[i])
        }
    }

    function findFamily(games){
        if(games.indexOf('strategy') > -1){
            return true
        } else { return false }
    }
    

    return(

        <>
        <div>
            <h4> Best Strategy Game page </h4>      


            <Container>

                <Row>
                    {
                        <Listing list={bstStrategy}/>
                    }
                </Row>

            </Container>
     
        </div>


        </>
    )

}





export default BestStrategy;