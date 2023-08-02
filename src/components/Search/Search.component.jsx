import "./Search.styles.css";

const Search = ({ search, setSearch, setNSearchs }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setNSearchs((prev) => prev + 1);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="animals"
        value={search}
        onChange={onChangeHandler}
        className="input"
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default Search;
