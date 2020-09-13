const React = require('react');
import About from './child-components/about-2';

class App extends React.Component {
  render() {
    return (
      <div>
        <About />
      </div>
    )
  }
}

/*function App() {
  return (
    <div>
      <About />
    </div>
  );
}*/

export default App;