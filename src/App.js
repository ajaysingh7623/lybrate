
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from "./components/About/about";
import Content from "./components/Content/content";

export default function App() {
  return (
    <div >
      <Router>
      
          <div className="about_us "><Link to="/about">About Us</Link></div>
          <div className="contacts"> <Link to="/Content">Content</Link></div>
          <Switch>
            <Route path="/about" component={About}>
              
            </Route>
            <Route path="/Content" component={Content}>
              
            </Route>
          </Switch>
    
      </Router>
    </div>
  );
}

