import React from "react"
import '../components/css/navbar.css';
import { RiShoppingCart2Line } from 'react-icons/ri';

// const square = { width: 175, height: 175 }

function NavBar({ currentUser, handleLogOut }) {

    return (
        <div className="navbar">
            <a className="home-button" href="/home">Home</a>
            <a className="cart-button" href="/carts"><RiShoppingCart2Line/></a> 
            {
            currentUser ? 
                <a className="logout-button" href="/" onClick={handleLogOut}>Logout</a>
            :
                <a className="logout-button" href="/">Log In</a>
            }
        </div>
    )
}

export default NavBar