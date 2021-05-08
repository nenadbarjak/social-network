import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (  
        <Navbar bg="primary" variant="dark" collapseOnSelect expand="md">
            <Navbar.Brand as={Link} to='/'>Social Network</Navbar.Brand>                        
        </Navbar>
    );
}
 
export default Header;