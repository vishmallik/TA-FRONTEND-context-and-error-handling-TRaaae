import React from "react";

export default class ErrorBoundaryLocation extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong! Please Reload!!!</h1>;
    }
    return this.props.children;
  }
}
