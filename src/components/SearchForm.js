import React from "react";

function SearchForm(props) {
  return (
    <div className="form-group">
      <form className="form-inline">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          type="search"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
      </form>
    </div>
  );
}

export default SearchForm;
