const React = require('react');
import About from "./child-components/about";

class App extends React.Component {
  render() {
    return (
      <div>
        <About/>
      </div>
    )
  }
}

export default App;