/* Create a navigation menu component for the website for the fictitious company you have been working on in the last tasks. 
This component should include menu items for the home page, user profile page, shopping page, and legal page.
    ○  Only display the landing component on the home page (i.e. root URL - “/”)
    ○ Display at least 3 product components when the “shop” menu item is selected.

Note: I have combination of React Bootstrap and React Router 'Link' for creating navigation menu.
 */

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className='header'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                        <Link className="nav-item" to="/">Home</Link>
                        <Link className="nav-item" to="/catelog">Shop</Link>
                        <Link className="nav-item" to="/calculator">Calculator</Link>
                        <Link className="nav-item" to="/user">User</Link>
                        <Link className="nav-item" to="/legal">Legal</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;