import "./App.css";
import { getData } from "./components/Data";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import NavigationBar from "./components/NavigationBar";
import PriceRange from "./components/PriceRange";
function App() {
  const data = getData();

  const [searchStr, setSearchStr] = useState("");
  const [category, setCategory] = useState("All");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleSearch = (event) => {
    setSearchStr(event.target.value);
  };

  const handleRange = (event) => {
    event.target.id === "x"
      ? setX(event.target.value)
      : setY(event.target.value);
  };

  function handleCategory(event) {
    setCategory(event.target.innerText);
  }

  function rangeItem(arr) {
    const newArr = [];

    if (Number(x) !== 0 && Number(y) !== 0) {
      for (const item of arr) {
        const xRange = Number(x);
        const yRange = Number(y);

        if (item.strPrice >= xRange && item.strPrice <= yRange) {
          newArr.push(item);
        }
      }
      return newArr;
    }

    return arr;
  }

  function searchedItem(arr) {
    const searchedMenu = [];

    for (const item of arr) {
      //const itemStr = Object.values(item).toString().toLocaleLowerCase();
      const searchByNameCatAlc = (
        item.strDrink +
        item.strCategory +
        item.strAlcoholic
      ).toLocaleLowerCase();

      if (searchByNameCatAlc.includes(searchStr.toLowerCase())) {
        searchedMenu.push(item);
      }
    }

    return searchedMenu;
  }

  const filteredMenu = data.filter((categoryOfMenu) => {
    if (category === "All") return categoryOfMenu;
    return categoryOfMenu.strCategory === category;
  });

  const searchResults = searchedItem(filteredMenu);
  const rangeResults = rangeItem(searchResults);

  return (
    <div className="all-container">
      <NavigationBar onCategory={handleCategory}></NavigationBar>
      <WelcomePage></WelcomePage>
      <SearchBar onSearch={handleSearch}></SearchBar>
      <PriceRange onRange={handleRange}></PriceRange>
      <Wrapper menu={rangeResults} searchedStr={searchStr}></Wrapper>
    </div>
  );
}

export default App;
