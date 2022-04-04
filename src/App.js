import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Login from "./component/Login";
import Home from "./component/Home";
import Details from "./component/Details";
import MyNavbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Switch } from "react-router-dom";


function App() {
  return <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <div>
            <MyNavbar />
            <Route path="/home" exact component={Home} />
            <Route path="/details/:imdbID" exact component={Details} />
            <Footer />
          </div>
        </Switch>
      </Router>
    </div>;
}

export default App;
