import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import stockCheck from '../js/stockCheck';


function Listing(props) {
    let listName = props.list;
    let navigate = useNavigate();


    return(
        <Container>
            <Row>
        {
            listName.map(function(a,i){
                return(
                    <Col sm key={i} className="product-info">
                        <img className="product-image" onClick={() =>{navigate('../detail/'+listName[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + listName[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />
                        <p className="product-name"> {listName[i].name} </p>
                        <p className="product-price"> {listName[i].price} </p>
                        {stockCheck(listName[i].stock)}
                    </Col>
                )
            })
        }
            </Row>
        </Container>
    )
}
export default Listing;
