import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavTabs = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success" >
                <div className="container-fluid">
                    <Link className="navbar-brand navbar-expand-lg" href="/">User Crud App</Link>
                    <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" href="#" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about' href="#">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact' href="#">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link className=" navbar-brand navbar-expand-lg btn btn-outline-light" type='button' to='/user/add'>Add User</Link>
            </nav>
        </div>
    )
}
export default NavTabs