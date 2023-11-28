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
        <div className="border-white border-[0.5px] rounded-lg w-[500px] h-auto bg-red flex-col-center-center overflow-hidden">
            <p className="text-3xl mt-12 font-semibold">{ props.title }</p>
            <div className="transition-transform ease-out duration-500">
                <img src={ props.logo } className="h-56 w-auto" />
            </div>
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