import "./NavigationBar.css";
import React, { useState } from "react";
import { getData } from "./Data";

function NavigationBar({ onCategory }) {
  const data = getData();

  const categories = data.reduce((values, category) => {
    if (!values.includes(category.strCategory)) {
      values.push(category.strCategory);
    }
    return values;
  }, []);

  return (
    <div className="navigation-bar">
      <button className="all" onClick={(event) => onCategory(event)}>
        All
      </button>
      {categories.map((category) => (
        <button onClick={(event) => onCategory(event)}>{category}</button>
      ))}

      <div className="nav-cart">Cart</div>
    </div>
  );
}

export default NavigationBar;
