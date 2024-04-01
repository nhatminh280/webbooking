import React from "react";

const CitySelection = ({
  cgvLocations,
  selectedCity,
  handleClick,
}: {
  cgvLocations: string[];
  selectedCity: string;
  handleClick: (city: string) => void;
}) => {
  return (
    <div
      id="toggle-tabs"
      className=" relative flex flex-col border-[#222] bg-transparent bg-auto bg-scroll py-5 text-center sm:flex-row sm:flex-wrap  "
    >
      {cgvLocations.map((location, index) => (
        <div
          key={index}
          className={` box-border flex h-10 max-w-36 items-center rounded-[5px] bg-auto bg-scroll bg-repeat bg-origin-padding text-center leading-[18px] ${
            selectedCity === location
              ? "bg-[#222] text-[#fff]"
              : " bg-[#fdfcf0] text-[#636363]"
          }`}
        >
          <div
            className={`cursor-pointer px-[10px] pt-[0.25px] text-center text-[13px] leading-[18px] text-${
              selectedCity === location ? "#fff" : "#222"
            }`}
            onClick={() => handleClick(location)}
          >
            {location}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitySelection;
