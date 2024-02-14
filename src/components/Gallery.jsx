import React from "react";
import Card from "./card";
import "../index.css";
import { useState } from "react";

const Gallery = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
   <div className="container mx-auto mt-8 ">
      <div className=" ml-14">
        <label className="text-2xl font-bold text-white ">Filters:</label>
        {uniqueCategories.map((category) => (
          <Button
            key={category}
            category={category}
            applyFilter={() => handleCategoryChange(category)}
          />
        ))}
      </div>
      <div className=" p-10">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
          {filteredData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
