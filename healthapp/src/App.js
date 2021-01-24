import './App.css';
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Login from './components/login'
import Homepage from "./components/Homepage"
import Editaccount from "./components/EditAccount";
import Signup from "./components/Signup";
import Footer from "./pagecomponent/footer"
import Nav from "./pagecomponent/nav"
import Updates from './components/Updates';
import Goals from './components/Goals';

function App() {
  return (
    <div style={{ backgroundColor: "#37474F", height: "90vh" }}>
      <Router>
        <Nav></Nav>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/Homepage" component={Homepage}></Route>
          <Route path="/Signup" component={Signup}></Route>
          <Route path="/EditAccount" component={Editaccount}></Route>
          <Route path="/healthupdate" component={Updates}></Route>
          <Route path="/goals" component={Goals}></Route>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
