import React, { Component } from "react";

import calculatePizzasNeeded from "../lib/calculate-pizzas-needed";

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2
};

const WithPizzaCalculation = WrappedComponent => {
  return class extends Component {
    state = { ...initialState };

    static displayName = `WithPizzaCalulation(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    updateNumberOfPeople = event => {
      const numberOfPeople = parseInt(event.target.value, 10);
      this.setState({ numberOfPeople });
    };

    updateSlicesPerPerson = event => {
      const slicesPerPerson = parseInt(event.target.value, 10);
      this.setState({ slicesPerPerson });
    };

    reset = event => {
      this.setState({ ...initialState });
    };

    render() {
      const { numberOfPeople, slicesPerPerson } = this.state;
      const numberOfPizzas = calculatePizzasNeeded(
        numberOfPeople,
        slicesPerPerson
      );

      return (
        <WrappedComponent
          {...this.state}
          numberOfPizzas={numberOfPizzas}
          onUpdatePeople={this.updateNumberOfPeople}
          onUpdateSlices={this.updateSlicesPerPerson}
          onReset={this.reset}
        />
      );
    }
  };
};

export default WithPizzaCalculation;
