import React from "react";

function SearchForm(props) {
  return (
    <div className="form-group">
      <form className="form-inline">
        <input
          //   onChange={props.handleInputChange}
          //   value={props.value}
          type="search"
          className="form-control"
          placeholder="Search Employee"
          id="search"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
