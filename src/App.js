import './App.css';

//react library
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';

//import component

import Products from './component/Products.js'
import AllGames from './component/All-games.js'
import Arrivals from './component/Arrivals.js'
import Best2players from './component/Best-2players'
import BestFamily from './component/Best-family'
import BestStrategy from './component/Best-strategy'
import InStock from './component/In-stock.js'

import Card from './component/Card.js'
import Detail from './component/Detail.js'
import Cart from './component/Cart.js'

import NotFound from './component/NotFound.js'






//import js
import boardGameList from './boardGameList.js'

function App() {

  
let navigate = useNavigate();


  const lists = boardGameList;
  const datas = lists.map(function(a,i){
      return lists[i].data
  })

  let games = [];
  for(let i in datas){
      games.push(...datas[i])
  }



  return (
    <div className="App">   
       {/* navbar */}
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
                <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      


      { /* Route group */}
      <Routes>

        {/* index page*/}
        <Route path="/" element={
          <>
            {/* jumbotron */}
            <div className="main-bg"> </div>      
            {/* lists */}
            <Card lists={lists} />

          </>
        }/>
        
        <Route path="/products" element={<Products list={lists}/>}>
          <Route path="arrivals" element={<Arrivals/>}/>
          <Route path="in-stock" element={<InStock/>}/>
          <Route path="all-games" element={<AllGames allGames = {games}/>}/>          
          <Route path="best-2players" element={<Best2players allGames={games}/>}/>
          <Route path="best-family" element={<BestFamily/>}/>  
          <Route path="best-strategy" element={<BestStrategy/>}/>
          <Route path="detail/:id" element = {<Detail allGames={games}/>} />        
        </Route>

        <Route path="/cart" element = {<Cart />} />

        <Route path="*" element={<NotFound/>} />


      </Routes>
      



    </div>
    
  );
}

export default App;
