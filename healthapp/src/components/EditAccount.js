import axios from 'axios';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardTitle,MDBIcon,MDBAlert} from 'mdbreact'
import { useEffect, useState } from 'react';

function Editaccount(props) {
  const [oldpassword, setoldpassword] = useState();
  const[newpassword,setnewpassword]=useState();
  const [invalidmsg, setmsg] = useState("");
  const [validchange, setvalidchange] = useState(false);

  useEffect (()=> {
    window.addEventListener("oldpassword",handlechangeoldpassword);
    window.addEventListener("newpassword",handlechangenewpassword);
    return () => window.removeEventListener("submit", submit);

  });

  function handlechangeoldpassword(event) {
    setoldpassword(event.target.value);
  }

  function handlechangenewpassword(event) {
    setnewpassword(event.target.value);
  }

  async function submit(){
      await axios
        .put(
          "http://localhost:3000/login/changepassword/" + props.curremail+"/"+
            oldpassword +
            "/" +
            newpassword
        )
        .then((response) => {
          console.log(response);
          setmsg("");
          setoldpassword();
          document.getElementById('oldpassword').value=""
          setnewpassword();
          document.getElementById("newpassword").value = "";
          setvalidchange(true);
          setTimeout(() => {
            setvalidchange(false);
          }, 2500);

        })
        .catch((error) => {
          console.log(props);
          console.log(error);
          if (error.response != null) setmsg(error.response.data.msg);

        });
  }

  return (
    <div>
      {
        validchange ?   
        <MDBAlert color="success">
          <br />
          Change Password is successful
      </MDBAlert>: null
      }

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
              <MDBIcon icon="user" size="lg" /> &nbsp;{props.curremail}
            </div>
            <form>
              <p style={{ color: "red" }}>{invalidmsg}</p>
              <label>Old Password : &nbsp;</label>
              <input
                type="password"
                name="oldpassword"
                id="oldpassword"
                onChange={handlechangeoldpassword}
                size="35"
              ></input>
              <br />
              <label>New Password : &nbsp;</label>
              <input
                type="password"
                name="newpassword"
                id="newpassword"
                onChange={handlechangenewpassword}
                size="35"
              ></input>
              <br />
              <MDBBtn
                color="success"
                style={{ width: "350px" }}
                onClick={() => submit()}
              >
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