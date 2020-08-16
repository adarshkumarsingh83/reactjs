import React from "react";

const CounterContext = React.createContext();

const CounterContextProvider = CounterContext.Provider;

const CounterContextConsumer = CounterContext.Consumer;

export { CounterContextProvider, CounterContextConsumer };

export default CounterContext;
