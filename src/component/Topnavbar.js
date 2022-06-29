import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

function Topnavbar(props) {
    let navigate = useNavigate();

    //<img className="product-image img-responsive center-block" onClick={() =>{navigate('../detail/'+listName[i].id)}} src={"https://raw.githubusercontent.com/Yongho-Lee/Boargle/main/src/img/bgImage/" + listName[i].shortName +".jpg?raw=true"} width="250px" height="200px" alt={'bgimage'+i} />

    return(
        <Navbar className="navbar" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">BoarGle!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/products/arrivals')}}> New Arrivals </Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/products/in-stock')}}> All in-Stock items </Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{ navigate('/products/all-games')}}>All Board Games</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{ navigate('/products/best-family')}}>Best family Games</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{ navigate('/products/best-2players')}}>Best 2 Players Games</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{ navigate('/products/best-strategy')}}>Best strategy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cart"> 🛒 Cart</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Topnavbar;
