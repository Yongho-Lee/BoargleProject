import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import Listing from './Listing.js'



function AllGames(props) {

    let navigate = useNavigate();

    const games = props.allGames;
    return(

        <>
        <div>
            <h4> All-Games Page </h4>

        </div>

        <Container>
            <Row>
                {
                    <Listing list={games}/>
                }
            </Row>

        </Container>
     

        </>
    )

}





export default AllGames;