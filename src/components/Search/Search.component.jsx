import "./Search.styles.css";

const Search = ({ search, setSearch, setNSearchs }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setNSearchs((prev) => prev + 1);
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="animals"
        value={search}
        onChange={onChangeHandler}
        className="input"
      />
      <button type="sumbit" onClick={onClickHandler} className="search-button">
        Search
      </button>
    </form>
  );
};

export default Search;
