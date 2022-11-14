import React from "react";

export default class ErrorBoundarySectionOne extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong!Reload the page</h1>;
    }
    return this.props.children;
  }
}
