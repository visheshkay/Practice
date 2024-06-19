// NavBarComponent.js 
import './NavbarComponent.css'
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { NavLink } from 'react-router-dom';

function NavbarComponent() { 
	return ( 
		<Navbar collapseOnSelect expand="lg"
				className="bg-info navbar1"> 
			<Container> 
				<Navbar.Brand> 
					Taru
				</Navbar.Brand> 
				<Navbar.Toggle 
					aria-controls="responsive-navbar-nav" /> 
				<Navbar.Collapse id="responsive-navbar-nav"> 
					<Nav className="me-auto"> 
                        <Nav.Link>
						<NavLink to="" style={({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? 'wheat' : 'black',
        fontWeight:'bold'
      })}> 
							Home
						</NavLink> 
                        </Nav.Link>
                        <Nav.Link>
						<NavLink to="new-user" style={({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? 'wheat' : 'black',
        fontWeight:'bold'
      })}> 
							Register
						</NavLink> 
                        </Nav.Link>
                        <Nav.Link>
                        <NavLink to="login" style={({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? 'wheat' : 'black',
        fontWeight:'bold'
      })}> 
							Login
						</NavLink>
                        </Nav.Link>
						
					</Nav> 
				</Navbar.Collapse> 
			</Container> 
		</Navbar> 
	); 
} 

export default NavbarComponent;
