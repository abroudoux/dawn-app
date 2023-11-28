import { Link } from "react-router-dom";
import { faCircleMinus, faCirclePlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


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

            <div className="text-4xl gap-4 flex-col-center-center mt-8">
                <p className="">Joueurs</p>
                <FontAwesomeIcon icon={faUsers} />
                <div className="flex-row-center-between gap-2">
                    <FontAwesomeIcon className="text-3xl" icon={faCircleMinus} onClick={substract} />
                    { count }
                    <FontAwesomeIcon className="text-3xl" icon={faCirclePlus} onClick={add} />
                </div>
                {isDisabled &&
                    <div className="text-base text-grey-light font-light">Vous ne pouvez pas ajouter moins de { count} joueurs</div>
                }
            </div>

            <div className="flex-row-center-between mt-12">
                <Link to="/" className="w-auto btn-black">Retour</Link>
                <Link to="/" className="w-auto btn-white">Enregistrer</Link>
            </div>
        </section>
    );
};