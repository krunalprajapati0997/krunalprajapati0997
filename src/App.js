import './App.css';
import Nav1 from './Nav1';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Page from './Page';
import Contact from './Contact';
import Not from './Not';
import Nav2 from './Nav2';
import blog from './blog';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App">
    <Nav1 />
    <Switch >
    
     <Route exact path='/' component={Home}/>
     <Route exact path='/about' component={About}/>
    <Route exact path='/services' component={Services}/>
    <Route exact path='/portfolio' component={Portfolio}/>
     <Route exact path='/page' component={Page}/>
     <Route exact path='/contact' component={Contact}/>
     <Route  component={Not}/>
     <Route exact path='/nav1/blog' component={Nav1/blog}/>
    </Switch>
    <Nav2 />
    </div>
    </Router>
  );
}

export default App;
