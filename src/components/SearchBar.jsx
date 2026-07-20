function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        placeholder="🔍 Search Fuel Station..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;