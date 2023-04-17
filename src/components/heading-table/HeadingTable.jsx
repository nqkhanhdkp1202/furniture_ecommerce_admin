import React from "react";

const HeadingTable = ({
  header,
  subHeader,
  totalItems,
  placeholderSearch,
  isSearchCategory,
  placeholderCategory,
  isAdd,
  btnAdd,
}) => {
  return (
    <div className="records--header">
      <div className="title fa-shopping-bag">
        <h3 className="h3">
          {header}{" "}
          <a href="#" className="btn btn-sm btn-outline-info">
            {subHeader}
          </a>
        </h3>
        <p>Found Total {totalItems} Items</p>
      </div>
      <div className="actions">
        <form action="#" className="search flex-wrap flex-md-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder={placeholderSearch}
            required=""
          />
          {isSearchCategory && (
            <select name="select" className="form-control">
              <option value="" selected="">
                {placeholderCategory}
              </option>
            </select>
          )}
          <button type="submit" className="btn btn-rounded">
            <i className="fa fa-search" />
          </button>
        </form>
        {isAdd && (
          <a href="#" className="addProduct btn btn-lg btn-rounded btn-warning">
            {btnAdd}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeadingTable;
