import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Listing from './Listing.js'
import stockCheck from '../js/stockCheck';


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
                        <Listing list={bstfamily} />
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