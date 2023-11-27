import NavLinks from "./NavLink";

import { faHome, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {

    return (

        <nav className="backdrop-blur-sm flex-row-center-center absolute bottom-0 left-0 w-full h-auto border-t-[0.5px] border-grey-light">
            <ul className="flex-row-center-between">
                <NavLinks path="/" title="Accueil" icon={faHome} />
                <NavLinks path="/search" title="Chercher" icon={faMagnifyingGlass} />
                <NavLinks path="/user" title="Compte" icon={faUser} />
            </ul>
        </nav>

    )

}