import axios from 'axios';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,MDBIcon, MDBInput} from 'mdbreact'
import { useEffect, useState } from 'react';

function Editaccount() {
  const [oldpassword, setoldpassword] = useState();
  const[newpassword,setnewpassword]=useState();
  const [invalidmsg, setmsg] = useState("");

  useEffect (()=> {
    window.addEventListener("oldpassword",handlechangeoldpassword);
    window.addEventListener("newpassword",handlechangenewpassword);
    window.addEventListener("submit",submit);
    return () => window.removeEventListener("submit", submit);

  });

  function handlechangeoldpassword(event) {
    setoldpassword(event.target.value);
  }

  function handlechangenewpassword(event) {
    setnewpassword(event.target.value);
  }

  function submit(){
      axios.put().then(()=>{
          console.log("edit account has been submitted");
      });
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div
        style={{
          heigh: "1000px",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="row justify-content-center align-self-center"
      >
        <MDBCard
          color="stylish-color"
          style={{ width: "50rem", color: "white", padding: "20px" }}
        >
          <MDBCardTitle>
            <MDBIcon icon="cog" size="lg" /> &nbsp; Edit Account
          </MDBCardTitle>

          <MDBCardBody>
            <div>
              <MDBIcon icon="user" size="lg" /> &nbsp;Test@gmail.com
            </div>
            <form>
              <p style={{ color: "red" }}>{invalidmsg}</p>
              <label>Old Password : &nbsp;</label>
              <input
                type="text"
                name="oldpassword"
                onChange={handlechangeoldpassword}
                size="35"
              ></input>
              <br />
              <label>New Password : &nbsp;</label>
              <input
                type="text"
                name="newpassword"
                onChange={handlechangenewpassword}
                size="35"
              ></input>
              <br />
              <MDBBtn color="success" style={{ width: "350px" }}>
                Change Password
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
}
export default Editaccount