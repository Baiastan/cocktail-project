import "./PriceRange.css";

function PriceRange({ onRange }) {
  return (
    <div class="price">
      from{" "}
      <input
        onInput={(event) => onRange(event)}
        type="number"
        min="0"
        max="100"
        id="x"
      />{" "}
      to{" "}
      <input
        onInput={(event) => onRange(event)}
        type="number"
        min="0"
        max="100"
        id="y"
      />
    </div>
  );
}

export default PriceRange;
