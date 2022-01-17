import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideNavBar from "./components/SideNavbar"
import {Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid>
            <Row>
              <Col xs={2} id="sidebar-wrapper">
                <SideNavBar/>
              </Col>
              
              <Col xs={10} id='page-content-wrapper'>
              <Routes> 
                
                 <Route path="/" element={<Home/>}/> {/*          
                <Route path="/artist-page/:id" element={<ArtistPage/>}/>
                <Route path="/album-page/:Id" element={<AlbumPage/>}/>
                  */}
              </Routes>
              </Col>
            </Row>
        </Container>
          {/* <SpotifyPlayer/> */}
        
      </div>
    </Router>
  );
}

export default App;
