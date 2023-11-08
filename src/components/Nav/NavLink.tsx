import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type NavLinkProps = {
    path : string;
    title : string;
    icon ? : string;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {

    const location = useLocation();

    return (

        <li className={`text-4xl px-6 py-4 text-white ${location.pathname === props.path ? "active" : ""}`}>
            <Link to={ props.path }>
                <FontAwesomeIcon icon={ props.icon } />
                { props.title }
            </Link>
        </li>

    )
};


export default NavLinks;
