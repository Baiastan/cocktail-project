import "./Wrapper.css";
import MenuGrid from "./MenuGrid";
import CocktailPopup from "./CocktailPopup";

function Wrapper(props) {
  return (
    <div className="wrapper">
      <MenuGrid menu={props.menu} searchedStr={props.searchedStr}></MenuGrid>
      <CocktailPopup></CocktailPopup>
    </div>
  );
}

export default Wrapper;
