import React from "react";

function CardUpdate(props) {
  const { key, img, title } = props;
  return (
    <>
      <div key={key} className="rounded-lg relative md:mb-0 mb-20">
        <img src={img} alt={title} className="w-full" />
        <div className="absolute -bottom-17 left-1/2 transform -translate-x-1/2 p-4 z-1 bg-[#F5F7FA] shadow-md rounded-md w-[84%]">
          <div className="md:text-2xl text-lg font-semibold mb-5">{title}</div>
          <a href="#" className="text-[#4CAF4F] font-semibold">
            Readmore →
          </a>
        </div>
      </div>
    </>
  );
}

export default CardUpdate;
