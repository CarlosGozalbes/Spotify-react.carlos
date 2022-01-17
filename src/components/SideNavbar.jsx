import { Navbar, Nav, Image, Button} from 'react-bootstrap'
import Spotify_logo from '../assets/spotify_logo.png'
import { Link} from 'react-router-dom'
import { BsFillHouseDoorFill, BsSearch, BsFillBarChartFill } from "react-icons/bs";

const SideNavBar = () => {
    return (
    <>    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav d-flex align-items-start flex-column' id ="sidenavbar">
            
            <Navbar.Brand className='mr-4 ml-3 mt-4 ' href="#home"><Image className='p-0' src={Spotify_logo} alt="netflix logo image" height={40} width={130}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto mt-4 d-flex flex-column">
                <div className='align-items-start'>
                <Nav.Link className='pr-3 mb-2' href="#features"><BsFillHouseDoorFill className='iconss mr-3' size={25}/>Home</Nav.Link>
                {/*
                <Link to="/tv-shows">
                 <Nav.Link className='pr-3' href="#TV Shows">TV Shows</Nav.Link> 
                    <div className={location.pathname ==='/tv-shows' ? 'nav-link active' : 'nav-link'}>TV Shows</div>
                
                </Link>*/}

                <Nav.Link className='pr-3 mb-2' href="#Movies"><BsSearch className='iconss mr-3' size={25}/>Search</Nav.Link>
                <Nav.Link className='pr-3' href="#Recently Added"><BsFillBarChartFill className='iconss mr-3' size={25}/>Your Library</Nav.Link>
                </div>
                <Button variant="light" className='align-items-end' size="lg" block>
                    SING UP
                </Button>
                <Button variant="outline-light" className='align-items-end' size="lg" block>
                    LOGIN
                </Button>
                <div className='d-flex'>
                <Nav.Link className='pr-3' href="#Movies">Search</Nav.Link>
                <span className='text-secondary align-bottom navbarseparator'>|</span>
                <Nav.Link className='pl-3' href="#Movies">Privacy</Nav.Link>
                </div>
                <Nav.Link className='pr-3' href="#Movies">Policy</Nav.Link>
                </Nav>
                
                
            </Navbar.Collapse>
        </Navbar>

    {/* <div className="d-flex py-3"><a href="./home-page.html"><img src="./assets/Spotify_Logo_RGB_White.png"
                            alt="logo" height="40px"></a></div>
        <a href="./home-page.html">
            <div className="home d-flex"><i className="bi bi-house-door-fill my-2 px-3"></i><strong>Home</strong></div>
        </a>
        <a href="search-page.html" className="text-white">
            <div className="search d-flex"><i className="bi bi-search my-2 px-3"></i><strong>Search</strong></div>
        </a>
        <div className="library d-flex"><i className="bi bi-list my-2 px-3"></i><strong>Your Library</strong></div>

        <div className="square d-flex mt-3"><i className="bi bi-plus-square-fill my-2 px-3"></i><strong>Create
                Playlists</strong></div>
        <div className="liked-songs d-flex mt-1"><i className="bi bi-heart-fill px-3"></i><strong>Liked Songs</strong>
        </div>
        <hr>
        <div className="sidebar-list mr-n2">
            <p className="my-1">Boiler Room: Room 1 &#128293</p>
            <p className="my-1">L'Imperatrice Mix</p>
            <p className="my-1">Oceanvs Orientalis &#127769</p>
            <p className="my-1">Afro Indie</p>
            <p className="my-1">Taba Brasilis &#127809</p>
            <p className="my-1">Discover Weekly</p>
            <p className="my-1">Modern Psychedelia</p>
            <p className="my-1">Voix de l'Hexagone</p>
            <p className="my-1">Afrobeat Essencials &#9889</p>
            <p className="my-1">Cuendano Tabado</p>
            <p className="my-1">Boiler Room: Room 1</p>
            <p className="my-1">L'Imperatrice Mix</p>
            <p className="my-1">Oceanvs Orientalis</p>
            <p className="my-1">Afro Indie</p>
            <p className="my-1">Taba Brasilis</p>
            <p className="my-1">Discover Weekly</p>
            <p className="my-1">Modern Psychedelia &#127752</p>
            <p className="my-1">Voix de l'Hexagone</p>
            <p className="my-1">Afrobeat Essencials</p>
            <p className="my-1">Cuendano Tabado</p>
        </div>
        <div className="install d-flex pt-1 mb-2"><i className="bi bi-arrow-down-circle pr-2"></i><strong>Install
                App</strong>
    </div> */}
    </>
    )
}

export default SideNavBar