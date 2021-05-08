import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <Navbar bg="primary" variant="dark" collapseOnSelect expand="md">
            <Navbar.Brand as={Link} to='/'>Social Network</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Text className='ml-auto'>Select a user by clicking</Navbar.Text>
            </Navbar.Collapse>            
        </Navbar>
    );
}
 
export default Header;