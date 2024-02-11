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
      <div className="mb-10">
        <label className="mr-2 text-2xl font-bold text-white ">Filters:</label>
        <select
          className="border p-2 rounded-xl"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {filteredData.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
