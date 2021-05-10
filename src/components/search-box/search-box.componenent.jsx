import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      // type:"search" are text fields designed for the user to enter search queries into.
      // Functionally identical to text inputs, but may be styled differently by the user agent.
      type="search"
      // value={this.state.searchField}
      placeholder={placeholder}
      // 'handleChange' is a callback from App component (passed as a prop into here)
      // it is called whenever there is a change inside the inputbox
      onChange={handleChange}
    />
  );
};
