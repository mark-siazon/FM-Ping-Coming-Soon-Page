import React from "react";
import logo from "../assets/logo.svg"

const HeaderSect = () => {
    return (
        <section className="mb-9 font-libre lg:mt-20">
            <img src={logo} alt="Brand Logo" className="mx-auto w-24 sm:w-28 mt-20 sm:mt-0" />
            <h1 className="font-light text-neutral-gray text-3xl sm:text-5xl mt-10 mb-1 sm:mb-3">We are launching <span className="text-neutral-veryDarkBlue font-bold">soon!</span></h1>
            <p className="text-neutral-veryDarkBlue text-md opacity-80 sm:text-lg">Subscribe and get notified</p>
        </section>
    );
};

export default HeaderSect;