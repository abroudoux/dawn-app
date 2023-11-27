import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Slides from "./Slides";

import unoLogo from "../../../public/assets/unoLogo.png";
import loupGarouLogo from "../../../public/assets/loupGarouLogo.png";
import codeNamesLogo from "../../../public/assets/codeNamesLogo.png";


export default function Carousel() {

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
    ];

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
                <button className="btn-white">Choisir</button>
            </div>
        </section>
    );
};