import "./MenuGrid.css";
import CocktailPopup from "./CocktailPopup";
import { useState } from "react";

function MenuGrid(props) {
  const [popupButton, setPopupButton] = useState(false);
  const [clickedItem, setClickedItem] = useState();

  return props.menu.length > 0 ? (
    <div className="cocktail-wrapper">
      {props.menu.map((item) => (
        <div key={item.idDrink} id={item.idDrink} className="cocktail-item">
          <div onClick={() => setClickedItem(item)}>
            <div class="cocktail-link" onClick={() => setPopupButton(true)}>
              <div className="imgWrapper">
                <img src={item.strDrinkThumb} />
                <p className="categoryType">{item.strCategory}</p>
              </div>
              <p className="nameCocktail">
                {item.strDrink}
                <span className="itemPrice">${item.strPrice}</span>
                <span className="alcoholicType">{item.strAlcoholic}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
      <CocktailPopup
        trigger={popupButton}
        setTrigger={setPopupButton}
        item={clickedItem}
      ></CocktailPopup>
    </div>
  ) : (
    <div class="nothing-found-wrapper">
      <h3>Nothing was found on "{props.searchedStr}"</h3>
      <img
        src="https://i.pinimg.com/originals/08/4e/45/084e45ddb07fc9ead821c064c5e76566.gif"
        alt="hello Hasbulla"
      ></img>
    </div>
  );
}

export default MenuGrid;

// {
//     idDrink: "17222",
//     strDrink: "A1",
//     strCategory: "Cocktail",
//     strAlcoholic: "Alcoholic",
//     strGlass: "Cocktail glass",
//     strInstructions:
//       "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
//     strInstructionsDE:
//       "Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren.",
//     strInstructionsIT:
//       "Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo.",
//     strDrinkThumb:
//       "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
//     strIngredient1: "Gin",
//     strIngredient2: "Grand Marnier",
//     strIngredient3: "Lemon Juice",
//     strIngredient4: "Grenadine",
//     strMeasure1: "1 3/4 shot ",
//     strMeasure2: "1 Shot ",
//     strMeasure3: "1/4 Shot",
//     strMeasure4: "1/8 Shot",
//     strCreativeCommonsConfirmed: "No",
//     dateModified: "2017-09-07 21:42:09",
//   },
