import React, { FC } from "react";


type FavCardProps = {
    name : string;
    cover ? : string;
};

const FavCard : FC<FavCardProps> = ( props ) => {

    return (

        <div className="w-64 h-64 bg-purple rounded-lg">
            <h3>{ props.name }</h3>
        </div>

    )

}


export default FavCard;