import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    );
  }
}

ReactDOM.render(
  // React Element
  // Where to render to the element to
  <App />,
  document.getElementById('app')
);
