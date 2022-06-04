import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Listing from './Listing.js';


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
                        <Listing list={instkgames} />
                    }
                </Row>

            </Container>
     
        </div>


        </>
    )

}


export default InStock;