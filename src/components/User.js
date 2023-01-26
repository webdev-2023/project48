/*Requirement Statement:
Create a “Logout” button on the user profile page which displays “User has logged out” in an alert when the button is clicked.
*/

const User = ({ name, onClick, isLoggedIn }) => {

    return <div>
        <h3>User Profile Page</h3>
        <h6>User Name: {name} </h6>
        <button className="btn" onClick={onClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
    </div>;
};

export default User;
