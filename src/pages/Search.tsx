import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Search() {

    return (

        <section className="page">
            <h1 className="title">Chercher</h1>
            <p className="font-light text-ms mb-5">Trouvez le prochain jeu qui occupera vos soirées</p>

            <div className="flex-row-center">
                <input type="text" className="w-full rounded-md mt-4 p-2 bg-black border-white ring-0 outline-none ring-violet focus:ring-2 focus:ring-inset focus:ring-violet border-[1px] text-white font-light"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-7 top-[8.25rem]" />
            </div>
        </section>

    );

};