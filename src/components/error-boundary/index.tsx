import { Component } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  getDerivedStateFromError() {
    this.setState({
      hasError: true,
    });
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error.message);
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.XYU</h2>;
        </div>
      );
    }
    return this.props.children;
  }
}
