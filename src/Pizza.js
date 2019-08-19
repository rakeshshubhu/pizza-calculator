import React, { Component } from "react";

import Title from "./Title";
import Input from "./Input";
import Result from "./Result";

export default class Pizza extends Component {
  render() {
    const {
      numberOfPeople,
      slicesPerPerson,
      onUpdatePeople,
      onUpdateSlices,
      numberOfPizzas,
      onReset
    } = this.props;

    return (
      <div className="Application">
        <Title />
        <Input
          label="Number of Guests"
          type="number"
          min={0}
          value={numberOfPeople}
          onChange={onUpdatePeople}
        />
        <Input
          label="Slices Per Person"
          type="number"
          min={0}
          value={slicesPerPerson}
          onChange={onUpdateSlices}
        />
        <Result amount={numberOfPizzas} />
        <button className="full-width" onClick={onReset}>
          Reset
        </button>
      </div>
    );
  }
}
