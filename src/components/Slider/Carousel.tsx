import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Slides from "./Slides";

import unoLogo from "../../../public/assets/unoLogo.png";
import loupGarouLogo from "../../../public/assets/loupGarouLogo.png";
import codeNamesLogo from "../../../public/assets/codeNamesLogo.png";
import bmcLogo from "../../../public/assets/bmcLogo.png";
import hearstoneLogo from "../../../public/assets/heartstoneLogo.png"
import pokemonLogo from "../../../public/assets/pokemonLogo.png"


const slidesData = [
    {
        title: "Uno",
        logo: unoLogo,
        players: "2-10 pers",
        time: "+/- 30min"
    },
    {
        title: "Loup Garou",
        logo: loupGarouLogo,
        players: "6-14 pers",
        time: "+/- 30min"
    },
    {
        title: "Code Names",
        logo: codeNamesLogo,
        players: "4-6 pers",
        time: "10/15min"
    },
    {
        title: "Blanc Manger Coco",
        logo: bmcLogo,
        players: "3-10 pers",
        time: "+/- 30min"
    },
    {
        title: "Heartstone",
        logo: hearstoneLogo,
        players: "2 pers",
        time: "20min"
    },
    {
        title: "Pokemon",
        logo: pokemonLogo,
        players: "2 pers",
        time: "20min"
    },
];

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slidesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slidesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="flex-col-center-center">
            <div className="flex-row-center-between w-full">
                <FontAwesomeIcon className="w-8 h-8" icon={faChevronLeft} onClick={prevSlide}/>
                <Slides title={`${slidesData[currentIndex].title}`} logo={`${slidesData[currentIndex].logo}`} players={`${slidesData[currentIndex].players}`} time={`${slidesData[currentIndex].time}`} />
                <FontAwesomeIcon className="w-8 h-8" icon={faChevronRight} onClick={nextSlide} />
            </div>
            <div className="w-full flex-row-center-center my-5">
                <Link to="/customization" className="btn-white">Choisir</Link>
            </div>
        </section>
    );
};