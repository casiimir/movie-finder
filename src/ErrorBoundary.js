import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
          <div>
            <h3 className="ma4">No movies, please search again</h3>
          </div>
      )
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;