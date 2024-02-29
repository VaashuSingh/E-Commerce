import React from "react";
import "./select.css";

const Select = () => {
  return (
    <div className="select_drop_down_list">
      <div className="search_field">
        <input type="text" />
      </div>
      <ul className="search_results">
        <li>Milks and Dairies</li>
        <li>Wines Alcohol</li>
        <li>Clothing Beauty</li>
        <li>Pet Foods Toy</li>
        <li>All Categories</li>
        <li>Fast food</li>
        <li>Baking material</li>
        <li>Vegetables</li>
        <li>Fresh Seafood</li>
        <li>Noodles Rice </li>
        <li>Ice cream</li>
      </ul>
    </div>
  );
};

export default Select;
