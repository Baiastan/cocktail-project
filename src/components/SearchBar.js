import "./SearchBar.css";

function SearchBar({ onSearch }) {
  return (
    <div className="searchDiv">
      <div>
        <p className="searchText">Search Cocktail Drinks</p>
      </div>
      <input
        id="search"
        type="text"
        placeholder="Search..."
        onInput={(event) => onSearch(event)}
      />
    </div>
  );
}

export default SearchBar;
