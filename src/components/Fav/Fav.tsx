import React from "react";

import FavCard from "./FavCard";


export default function Fav() {


    return (

        <section>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <FavCard name="test1"/>
                    <FavCard name="test1"/>
                    <FavCard name="test1"/>
            </div>
        </section>

    )
}