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
import { useState } from 'react';

function App() {
  const [loginemail,setloginemail]= useState();

  function setcurremail(email){
    setloginemail(email);
  }

  return (
    <div style={{ backgroundColor: "#37474F", height: "90vh" }}>
      <Router>
        <Nav curremail={loginemail} setcurremail={setcurremail}></Nav>
        <div className="App">
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route
            path="/login"
            render={(props)=>
              <Login setcurremail={setcurremail} props={props}/>
            }   
           />
          <Route path="/Homepage" render={()=>
            <Homepage curremail={loginemail} />
          }></Route>
          <Route path="/Signup" component={Signup}></Route>
          <Route path="/EditAccount" render={()=><Editaccount curremail={loginemail}></Editaccount>}></Route>
          <Route path="/healthupdate" component={Updates}></Route>
          <Route path="/goals" component={Goals}></Route>
        </div>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
