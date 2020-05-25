import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Portfolio from './component/portfolio';
import About from './component/about';
import Contact from './component/contact';
import Sidebar from './component/sidebar';
import Resume from './component/resume';
import Blog from './component/blog';
import NotFound from './component/notFound';

class App extends Component {

  renderRedirect = () => {
    let search = window.location.search;
    if(search.indexOf("?p=") != -1) {
      let url = window.location.pathname + window.location.search.slice(3);
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
            <Route exact path="/" component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/resume" component={Resume} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
