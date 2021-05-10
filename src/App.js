import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.componenent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // When the component is loaded the data is fetched and put into the state variable "monsters"
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    // from the state object of the App class
    // we extract the state variables: "monster" and "searchField"
    const { monsters, searchField } = this.state;

    // function uses array "filter" function on "monsters" object to only include
    // the name of monsters which include the letters in the search field
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        {/* SearchBox component sends a callback by the name of
        "handleChange" as a prop which the inputbox inside SearchBox will call
        every time there is an onChange event on it.
        This will update the state variable 'searchField' */}
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
