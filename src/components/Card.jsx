import React from "react";

import "../index.css";

const ImageCard = ({ id, category, image, name }) => {
  return (
    <div className="bg-[#ffffff] p-4">
      <img
        src={image}
        alt={category}
        className="w-full h-40 object-cover mb-2"
      />
      <div className="text-lg">{name}</div>
    </div>
  );
};

export default ImageCard;
