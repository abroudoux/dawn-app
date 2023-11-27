import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faClock } from "@fortawesome/free-solid-svg-icons";


type SlidesProps = {
    title : string;
    logo : string;
    players : string;
    time : string;
};

const Slides : FC<SlidesProps> = ( props ) => {

    return (
        <div className="backdrop-blur-sm border-white border-[0.5px] rounded-lg w-full h-auto flex-col-center-center">
            <p className="text-3xl mt-12 font-normal">{ props.title }</p>
            <img src={ props.logo } className="w-auto" />
            <div className="w-2/4 flex-row-center-between text-lg mb-12 mt-6">
                <div className="flex-col-center-center gap-2">
                    <FontAwesomeIcon icon={faUsers} />
                    <p>{ props.players }</p>
                </div>
                <div className="flex-col-center-center gap-2">
                    <FontAwesomeIcon icon={faClock} />
                    <p>{ props.time }</p>
                </div>
            </div>
        </div>
    );

};


export default Slides;