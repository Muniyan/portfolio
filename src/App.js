import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';
import Sidebar from './component/sidebar';
import NotFound from './component/notFound';
import Projects from './component/projects';
import Experience from './component/experience';
import Education from './component/education';

class App extends Component {

  renderRedirect = () => {
    let search = window.location.search;
    if(search.indexOf("?p=") !== -1) {
      let url = window.location.pathname + window.location.search.slice(3);
      console.log("url=================  ", url);
      return <Redirect to={url} />
    }
  }

  render() {
    return (
      <div className="container">
        { this.renderRedirect() }
        <div className="l-p1">
          <Sidebar />
        </div>

        <div className="r-p1">
          <Switch>
            <Route exact path="/portfolio" component={About} />
            <Route path="/portfolio/experience" exact component={Experience} />
            <Route path="/portfolio/education" exact component={Education} />
            <Route path="/portfolio/projects" component={Projects} />
            <Route path="/portfolio/contact" component={Contact} />
            <Route path="/portfolio/*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
