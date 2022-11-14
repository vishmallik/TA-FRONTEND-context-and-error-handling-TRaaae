import React from "react";

export default class ErrorBoundarySectionTwo extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>`An error occured!`</h1>;
    }
    return this.props.children;
  }
}
