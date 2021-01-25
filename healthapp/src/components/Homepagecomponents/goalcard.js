import axios from "axios";
import {
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { useEffect, useState } from "react";

function GoalCard(props){

  const[goal,setgoal]= useState([{weight:0,bodyfat:0}]);
  const [currhealth, setcurrhealth] = useState([
    { BMI: 0, weight: 0, height: 0, bodyfat: 0, age: 0 },
  ]);


  async function getdata(){
    props.setisLoading(true);
    await axios.get("http://localhost:3000/goal/getlatest/"+props.curremail).then((data)=>{
    setgoal(data.data);
    });
    await axios
      .get(
        "http://localhost:3000/updates/getlatesthealthdetail/" +
          props.curremail
      )
      .then((data) => {
        setcurrhealth(data.data);
        props.setisLoading(false);
      });
  }

  useEffect(() => {
    getdata();
  }, []);

    return (
      <div>
        <MDBCardBody style={{ color: "white" }}>
          <MDBCardTitle>
            <MDBIcon icon="bullseye" />
            &nbsp;Goal
          </MDBCardTitle>
          <MDBCardText style={{ color: "white" }}>
            <div>
              <h4>
                <div>
                  <div>
                    <MDBIcon icon="weight" /> &nbsp;BodyWeight: {goal[0].weight} kg
                  </div>
                  <br />
                  <div>
                    <MDBIcon icon="percentage" /> &nbsp; Body Fat: {goal[0].bodyfat} %
                  </div>
                  <br />
                </div>
                <div>
                  <div>Difference</div> <br />
                  <div>
                    <MDBIcon icon="weight" /> &nbsp; BodyWeight: 12 kg
                  </div>
                  <br />
                  <div>
                    <MDBIcon icon="percentage" /> &nbsp; BodyFat: 4 %
                  </div>
                  <br />
                </div>
              </h4>
              <MDBBtn style={{ width: "300px" }}>Set Goal ></MDBBtn>
            </div>
          </MDBCardText>
        </MDBCardBody>
      </div>
    );
}

export default GoalCard;