import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { useEffect, useState } from "react";
import axios from 'axios';

function Signup (props){

    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[invalidmsg,setmsg]=useState();
    
    useEffect(()=>{
        window.addEventListener("email",emaillistener);
        window.addEventListener("password",passwordlistener);
        window.addEventListener("submit",submitlistener)
        return()=>window.removeEventListener("email",emaillistener);
    });

    function emaillistener(event){
        setemail(event.target.value);
    }

    function passwordlistener(event){
        setpassword(event.target.value);
    }

    function submitlistener(){
        var payload = { email: email, password: password };
        axios.post("http://localhost:3000"+"/login/signup",payload).then(response=>{
            
            if (response.status===201){
                setmsg();
                props.history.push("/login");

            }
        }).catch((error)=>{
            setmsg(error.response.data.msg);
        ;});  
    }



    return (
      <div
        style={{ height: "100vh", verticalAlign: "middle" }}
        class="col text-center align-self-center"
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <MDBCol className="row justify-content-center align-self-center">
          <MDBCard
            color="stylish-color"
            style={{ width: "31rem", color: "white" }}
            class="col-xs-1"
          >
            <MDBCardBody>
              <MDBCardTitle>
                <MDBIcon icon="user-plus" />
                &nbsp; Sign Up
              </MDBCardTitle>
              <MDBCardText
                style={{
                  color: "white",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="form-group">
                  <p style={{color:"red"}}>{invalidmsg}</p>
                  <div
                    style={{
                      textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label>
                      <MDBIcon icon="user" /> &nbsp; Email
                    </label>
                    <br />

                    <input
                      type="text"
                      id="Email"
                      className="form-control form-control-md"
                      email
                      required
                      style={{ width: "450px", textAlign: "center" }}
                      onChange={emaillistener}
                    />
                  </div>
                  <br />
                  <label>
                    <MDBIcon icon="key" /> &nbsp; Password
                  </label>
                  <input
                    type="password"
                    id="Password"
                    className="form-control form-control-md"
                    style={{ width: "450px", textAlign: "center" }}
                    onChange={passwordlistener}
                    required
                  />
                </div>
              </MDBCardText>
              <div class="row">
                <MDBBtn
                  color="danger"
                  href="#"
                  style={{ width: "220px" }}
                  href="/login"
                >
                  Back
                </MDBBtn>
                &nbsp;
                <MDBBtn
                  color="success"
                  href="#"
                  style={{ width: "220px" }}
                  onClick={submitlistener}
                >
                  + Create new Account
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
}

export default Signup;