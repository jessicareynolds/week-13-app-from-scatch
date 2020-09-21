const React = require('react');
import About from './child-components/about';
import Contact from '.child-components/contact';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        {/*<div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Bad Munday</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" ></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">              
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>*/}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">Bad Munday</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/shop">Shop</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
<Switch>
          <Route exact path="/">
            <div>Home Route</div>
          </Route>
          <Route path="/shop">
            <div>Shop Route</div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
          </Route>
        </Switch>
        </Router>

    )
  }
}

export default App;