/*Requirement Statement:
     Create a header component that displays a logo and company name. 
     It should be able to welcome a user to the site or ask them to sign in, depending on boolean input.
*/

import PropTypes from "prop-types"
import logo from '../images/logo4.png'
import Navigation from './Navbar.js'

// Component to welcome the user by name
const Welcome = ({ name }) => {
    return <div>
        <p>Welcome {name}!</p>
    </div>
}

// Component for sign-in button. 
const SignUp = ({ onClick }) => {
    return <button className='btn' type="button" onClick={onClick}>Sign In</button>;
}

// Header compoment to display logo, company name and sign-in button. Navigation component is also embeded within Header component
const Header = (props) => {
    return <header className='header'>
        <img className='img' src={logo} alt="Logo" />
        <h1>{props.title}</h1>
        <Navigation />
        <div className="header-align">{props.isLoggedIn ? <Welcome name={props.name} /> : <SignUp onClick={props.onClick} />}</div>
    </header>;
};

// Defining default properties
Header.defaultProps = {
    title: 'NC Clothing App'
}

// Defining property type
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header
