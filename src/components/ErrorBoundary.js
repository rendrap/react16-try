import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oh no! Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
