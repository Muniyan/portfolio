import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';
import Sidebar from './component/sidebar';
import NotFound from './component/notFound';
import Projects from './component/projects';
import Experience from './component/experience';
import Education from './component/education';

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="l-p1">
          <Sidebar />
        </div>

        <div className="r-p1">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
