import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder}) => {
    return (
      <input
      className="search"
      type="search"
      value={this.state.searchField}
      placeholder={placeholder}
      // setState is an asynchronous function therefore we must add a callback to it
      // afterward if we want to use its value right the way
      onChange={(e) => this.setState({ searchField: e.target.value })}
    />
    )
  }
  