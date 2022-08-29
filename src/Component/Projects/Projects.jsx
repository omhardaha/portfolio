import React, { useState, useEffect, useRef } from "react";
import { AiFillGithub, AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

import "./Projects.css"

const featuredProducts = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
];
const featuredProductsTitle = [
    "Blog Website MERN",
    "Chrome Extension",
    "Social Media Website",
];
const featuredLinks = [
    "Blog Website MERN",
    "https://video-call-om.herokuapp.com/",
    "Social Media Website",
];

let count = 0;
let slideInterval;
export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    };

    useEffect(() => {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
        // eslint-disable-next-line
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 3000);
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    };

    return (
        <>
            <div ref={slideRef} className="w-full select-none relative">
                <h1 className="text-7xl my-5 font-grypen my-6">
                    My Works
                </h1>

                <div className=" grid md:grid-cols-2 grid-cols-1 items-center flex-col aspect-w-16 aspect-h-9">
                    <div className="p-6">

                        <img className=" my-4 " src={featuredProducts[currentIndex]} alt="" />
                    </div>
                    <div className="p-6 flex flex-col align-center   items-center">

                        <h1 className="text-3xl font-typerwriter ">{featuredProductsTitle[currentIndex]}</h1>

                        <span className="text-2xl my-4 font-typerwriter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit laudantium eligendi vero. Ipsam dolores veniam hic qui repellendus? Similique error numquam repellendus.</span>

                        <div className="flex flex-row gap-5 text-3xl font-typerwriter">
                            <a rel='noreferrer' target="_blank" href={featuredLinks[currentIndex]} > LIVE </a>
                            <a href="www.ff.f">
                                <AiFillGithub c />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                    <button
                        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                        onClick={handleOnPrevClick}
                    >
                        <AiOutlineVerticalRight size={30} />
                    </button>
                    <button
                        className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                        onClick={handleOnNextClick}
                    >
                        <AiOutlineVerticalLeft size={30} />
                    </button>
                </div>
            </div>
        </>
    );
}