import React from "react";

function Card(props) {
  const { key, img, title, desc } = props; //fungsi props untuk mengoper data antar komponen
  return (
    <>
      <div key={key} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="p-4 mb-4">
          <img src={img} alt={title} />
        </div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className=" text-center">{desc}</p>
      </div>
    </>
  );
}

export default Card;
