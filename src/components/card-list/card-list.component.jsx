import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

// CardList component will map throught the monsters props variable
// array and will generate <Card> components for each item
// in the array
export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
