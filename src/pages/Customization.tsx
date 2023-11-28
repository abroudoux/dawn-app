import { Link } from "react-router-dom";
import { faCircleMinus, faCirclePlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import cardFront from "../../public/assets/cardFront.png";
import cardBack from "../../public/assets/cardBack.png";


export default function Customization() {

    const [count, setcount] = useState(2);
    const [isDisabled, setIsDisabled] = useState(false);

    const add = () => {
        setIsDisabled(false);
        setcount(count + 1);
    };

    const substract = () => {

        if (count < 3) {
            setIsDisabled(true);
        } else {
            setcount(count - 1);

        };
    };

    return (
        <section className="page">
            <div className="flex-row-center-between">
                <h1 className="title">Personnaliser</h1>
                <div className="text-2xl">🇫🇷</div>
            </div>

            <div className="text-3xl gap-4 flex-col-center-center mt-8">
                <p className="mb-2">Joueurs</p>
                <FontAwesomeIcon icon={faUsers} />
                <div className="flex-row-center-between gap-2 text-2xl">
                    <FontAwesomeIcon className="text-xl" icon={faCircleMinus} onClick={substract} />
                    { count }
                    <FontAwesomeIcon className="text-xl" icon={faCirclePlus} onClick={add} />
                </div>
                {isDisabled &&
                    <div className="text-base text-grey-light font-light">Vous ne pouvez pas ajouter moins de { count} joueurs</div>
                }
            </div>

            <div className="text-3xl gap-4 flex-col-center-center mt-12">
                <p className="text-center">
                    Visuel
                </p>
                <div className="w-full flex-row-center-between">
                    <div className="w-2/4">
                        <img src={cardFront}/>
                    </div>
                    <div className="w-2/4">
                        <img src={cardBack}/>
                    </div>
                </div>
                <button className="btn btn-black text-base">Changer</button>
            </div>

            <div className="flex-row-center-between mt-16">
                <Link to="/" className="w-auto btn-black">Retour</Link>
                <Link to="/" className="w-auto btn-white">Enregistrer</Link>
            </div>
        </section>
    );
};