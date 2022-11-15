import React from "react";
import "./CocktailPopup.css";

function CocktailPopup(props) {
  const drink = props.item;
  const ingredients = [];
  const measures = [];

  for (const key in drink) {
    if (key.includes("strIngredient")) {
      ingredients.push(drink[key]);
    }
    if (key.includes("strMeasure")) {
      measures.push(drink[key]);
    }
  }

  const isOpen = props.trigger;
  let classOpen = "";

  if (isOpen) {
    classOpen = " open";
  } else {
    classOpen = "";
  }

  return props.trigger ? (
    <div className="popup">
      <div className={"popup-inner" + classOpen}>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>

        <div className="popup-header">
          <div className="image-wrapper">
            <img src={drink.strDrinkThumb} className="popup-image"></img>
          </div>
          <div className="list-wrapper">
            <h3>Ingredients: </h3>
            <ul>
              {ingredients.map((elem) => (
                <li className="ingredients list">{elem}</li>
              ))}
            </ul>
            <h3>Measures: </h3>
            <ol>
              {measures.map((elem) => (
                <li className="measures list">{elem}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="popup-footer">
          <h3>Instructions:</h3>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CocktailPopup;
