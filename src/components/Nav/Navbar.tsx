import React from "react";
import NavLinks from "./NavLink";


export default function Navbar() {

    return (

        <nav className="backdrop-blur-sm flex-row-center-center absolute bottom-0 left-0 w-full h-auto border-t-[0.5px] border-grey-light">
            <ul className="flex-row-center-between">
                <NavLinks path="/" title="Home"/>
                <NavLinks path="/search" title="Search"/>
                <NavLinks path="/user" title="User"/>
            </ul>
        </nav>

    )

}