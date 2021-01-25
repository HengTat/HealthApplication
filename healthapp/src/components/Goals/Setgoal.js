import { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";
import axios from "axios";

function SetGoal(props){
    
    const [modal, setModal] = useState(false);
    const [weight, setWeight] = useState();
    const [bodyfat, setbodyfat] = useState();

    useEffect(() => {
      window.addEventListener("toggle", toggle);
      window.addEventListener("submit", submit);
      window.addEventListener("weight", handleweight);
      window.addEventListener("bodyfat", handlebodyfat);
    });

    function toggle() {
      setModal(!modal);
    }

    function handleweight(event) {
      setWeight(event.target.value);
    }

    function handlebodyfat(event) {
      setbodyfat(event.target.value);
    }
    async function submit() {
      toggle();
      const payload={weight:weight,bodyfat:bodyfat,email:props.curremail}
      await axios.post("http://localhost:3000/goal/newgoal",payload).then((response)=>{
        if (props.setisLoading != null & props.setisLoading != null) {
              props.getdata();
              props.setisLoading(false);
            }

          if(props.getgoaldata!=null){
            props.getgoaldata();
          }
        })
    }
    return (
      <div>
        <MDBContainer>
          <MDBBtn onClick={toggle} style={{ width: "300px" }}>
            Set Goal >
          </MDBBtn>
          <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle} style={{ color: "black" }}>
              Set Goal
            </MDBModalHeader>
            <MDBModalBody>
              <form style={{ color: "black" }}>
                <label>Weight(kg):</label>
                <input type="text" className="form-control" onChange={handleweight}></input>
                <br />
                <br />
                <label>bodyfat:</label>
                <input type="text" className="form-control" onChange={handlebodyfat}></input>
                <br />
                <br />
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="success" onClick={submit}>
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </div>
    );

}

export default SetGoal;