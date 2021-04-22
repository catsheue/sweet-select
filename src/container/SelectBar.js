export default function SelectBar({
  searchInput,
  setSearchInput,
  placeholder,
  handleClearValue,
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
  list,
}) {
  const regex = new RegExp(searchInput, "gi");
  return (
    <div className="wrapper" ref={wrapper}>
      <div className="input-block">
        <input
          className="top-input"
          type="text"
          placeholder={placeholder}
          value={searchInput}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="close-button" onClick={(e) => handleClearValue(e)}>
          x
        </div>
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          {list.map(({ name }, index) => {
            if (searchInput === "")
              return (
                <div
                  key={index}
                  className="list-item"
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </div>
              );
            const regex = new RegExp(searchInput, "gi");
            if (regex.test(name)) {
              return (
                <div
                  key={index}
                  className="list-item"
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </div>
              );
            }
          })}
          {!!!list.some(({ name }) => regex.test(name)) && (
            <div className="list-item no-options">No options</div>
          )}
        </div>
      )}
    </div>
  );
}
