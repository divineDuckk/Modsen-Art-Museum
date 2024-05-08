import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>;
          {this.state.error && this.state.error.toString()}
        </div>
      );
    }
    return this.props.children;
  }
}
