import { Component } from "react";
import { ErrorPage } from "./ErrorPage";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: false,
    };
  }

  static getDerivedStateFromError(_) {
    return { err: true };
  }

  render() {
    if (this.state.err) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
