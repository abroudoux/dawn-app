import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import antonio from "../../public/assets/antonio.png";


export default function USer() {

    return (

        <section className="page">
            <h1 className="title">Votre compte</h1>

            <div className="flex-col-center-center py-12 gap-4">
                <div className="w-auto h-auto flex-col-center rounded-full">
                    <img src={antonio} alt="Antonio lpb" className="w-36 h-36 object-contain rounded-full bg-cover" />
                </div>
                <div className="flex-col-center-center">
                    <p className="text-2xl font-normal">Antonio Bertinau</p>
                    <p className="text-base font-light">@chicagre</p>
                </div>
            </div>

            <div>
                <p className="font-normal text-2xl mb-4">Vos jeux préférés</p>
                <ul className="flex-col-center-center gap-3">
                    <li className="hover:cursor-pointer flex-row-center-between w-full p-2 bg-purple-borders rounded-lg">
                        Strip Poker
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="hover:cursor-pointer flex-row-center-between w-full p-2 bg-purple-borders rounded-lg">
                        Loup Garou
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li className="hover:cursor-pointer flex-row-center-between w-full p-2 bg-purple-borders rounded-lg">
                        Uno
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                </ul>
            </div>
        </section>

    );

};