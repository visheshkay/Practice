// NavBarComponent.js 
import './NavbarComponent.css'
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import {useSelector,useDispatch} from 'react-redux'
import { resetState } from '../../redux/slice/buyerSellerslice'
import { NavLink } from 'react-router-dom';

function NavbarComponent() { 
	let { loginUserStatus, currentUser, errorOccurred, errMsg } = useSelector(state => state.buyerSellerLoginReducer);
	let dispatch = useDispatch()
	function click(){
		localStorage.removeItem('token')
		dispatch(resetState())
	  }
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
				<>
      {!loginUserStatus ? (
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              to=""
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="new-user"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Register
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="login"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Login
            </NavLink>
          </Nav.Link>
        </Nav>
      ) : currentUser.userType === 'seller' ? (
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              to=""
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="profile"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}

            >
              Add Product
            </NavLink>
          </Nav.Link>
		  <Nav.Link>
            <NavLink
              to="profile"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              My Products
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to=""
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
			  onClick={click}
            >
              Logout
            </NavLink>
          </Nav.Link>
        </Nav>
      ) : (
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              to=""
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="profile"
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
            >
              Orders
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to=""
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? 'wheat' : 'black',
                fontWeight: 'bold',
              })}
			  onClick={click}
            >
              Logout
            </NavLink>
          </Nav.Link>
        </Nav>
      )}
    </>
					
				</Navbar.Collapse> 
			</Container> 
		</Navbar> 
	); 
} 

export default NavbarComponent;
