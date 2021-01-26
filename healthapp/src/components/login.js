import{MDBBtn,MDBCard,MDBCardBody,MDBCardTitle,MDBCol,MDBCardText,MDBIcon} from 'mdbreact';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from "../config.json"

function Login(props){
    const[email,setemail]= useState("");
    const[password,setpassword]=useState("");
    const [invalidmsg, setmsg] = useState("");


    useEffect(()=>{
        window.addEventListener("email",emailFunction);
        window.addEventListener("password", passwordFunction);
        window.addEventListener("submit",submit);

        return () => window.removeEventListener("email", emailFunction);
    })

    function emailFunction(event){
        setemail(event.target.value);
    }

    function passwordFunction(event){
        setpassword(event.target.value);
    }
    function submit(){
        if(email===""||password===""){
            setmsg("Email and Password required");
        }
        else{
        axios.get(config.apiserver + "login/signin/"+email+"/"+password)
            .then((response) => {
            if (response.status === 200) {
              setmsg("");
              props.setcurremail(email);
              props.props.history.push("/homepage");  
            }
            })
            .catch((error) => {
            console.log(error);
            if(error.response!=null) setmsg(error.response.data.msg);
            });
        }
    }

    return (
      <div
        style={{ height: "80vh", verticalAlign: "middle" }}
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
                <MDBIcon icon="sign-in-alt" /> &nbsp; Log In
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
                  <p style={{ color: "red" }}>{invalidmsg}</p>
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
                      onChange={emailFunction}
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
                    onChange={passwordFunction}
                    required
                  />
                </div>
              </MDBCardText>
              <MDBBtn
                color="success"
                href="#"
                style={{ width: "350px" }}
                onClick={submit}
              >
                Login
              </MDBBtn>
              <br></br>
              <a href="/signup">Sign Up</a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
}

export default Login;