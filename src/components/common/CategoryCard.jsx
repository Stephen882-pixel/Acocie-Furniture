import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group">
      <div className="relative overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          onLoad={() => console.log("Loaded:", category.image)}
          onError={() => console.log("FAILED:", category.image)}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div> */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{category.description}</p>
        <p className="text-gray-500 text-sm">{category.itemCount} items</p>
      </div>
    </div>
  );
};

export default CategoryCard;
