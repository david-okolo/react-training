import React from 'react'; // import the React class. Fact: even in a jsx representation where it was never actually called, it is needed because when the jsx is being transpiled by our build tool to the normal js repesentation it need the React class
import './App.css'; // the accompanying css

// This is a functional component (stateless component)
function App() {
  // React.createElement is the method that is run when the jsx is being compiled. JSX is simply syntactic sugar
  const titleHeading = React.createElement('h1', null, 'Welcome to react!!!')
  return React.createElement('div', {className: 'App'}, titleHeading)
}

// ES6 style function expression
const jsxApp = () => {

  // JSX representation
  return (
    <div className='App'>
      <h1>Welcome to react!!!</h1>
    </div>
  )
}

// primarily export the App function out of this file
export default App;
