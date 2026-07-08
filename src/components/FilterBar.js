import React from "react";

function FilterBar({
  searchText,
  setSearchText,
  companyFilter,
  setCompanyFilter,
}) {
  return (
    <div className="filter">
      <input
        placeholder="Tìm kiếm tài sản..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <input
        placeholder="Lọc theo công ty..."
        value={companyFilter}
        onChange={(e) => setCompanyFilter(e.target.value)}
      />
    </div>
  );
}

export default FilterBar;