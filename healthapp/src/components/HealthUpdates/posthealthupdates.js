import { useEffect, useState } from 'react'
import{MDBBtn,MDBContainer,MDBModal,MDBModalBody,MDBModalFooter,MDBModalHeader} from 'mdbreact'
import axios from 'axios';

function PostHealthUdpates(props){

    const[modal,setModal]= useState(false);
    const[weight,setWeight]=useState();
    const [height, setheight] = useState();
    const [age, setage] = useState();
    const [bodyfat,setbodyfat]= useState();

    useEffect(()=>{
        window.addEventListener("toggle",toggle);
        window.addEventListener("submit",submit);
        window.addEventListener("weight",handleweight);
        window.addEventListener("height",handleheight);
        window.addEventListener("setage",handleage);
        window.addEventListener("bodyfat",handlebodyfat);
    })

    function toggle(){
        setModal(!modal);
    }

    function handleweight(event){
        setWeight(event.target.value);
    }

    function handleheight(event){
        setheight(event.target.value);
    }

    function handleage(event){
        setage(event.target.value);
    }

    function handlebodyfat(event){
        setbodyfat(event.target.value);
    }
    async function submit(){
        toggle();

        if(props.setisLoading!=null){
        props.setisLoading(true);
        }
        
        const payload = {
          email: props.curremail,
          weight: weight,
          height: height,
          bodyfat: bodyfat,
          age: age,
        };
        await axios
          .post("http://localhost:3000/updates/healthdetailupdate", payload)
          .then((response) => {
            console.log(response)
            if (props.setisLoading != null & props.setisLoading != null) {
              props.getdata();
              props.setisLoading(false);
            }
          });
    }

    return (
      <div>
        <MDBContainer>
          <MDBBtn onClick={toggle} style={{ width: "300px" }}>
            Health Updates +
          </MDBBtn>
          <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle} style={{ color: "black" }}>
              Health Update
            </MDBModalHeader>
            <MDBModalBody>
              <form style={{ color: "black" }}>
                <label>Weight(kg):</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleweight}
                ></input>
                <br />
                <br />
                <label>height(cm):</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleheight}
                ></input>
                <br />
                <br />
                <label>bodyfat:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handlebodyfat}
                ></input>
                <br />
                <br />
                <label>Age: </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleage}
                ></input>
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

export default PostHealthUdpates;