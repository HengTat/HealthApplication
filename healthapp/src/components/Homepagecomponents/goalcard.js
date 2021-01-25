import axios from "axios";
import {
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { useEffect, useState } from "react";
import SetGoal from "../Goals/Setgoal";

function GoalCard(props){

  const[goal,setgoal]= useState([{weight:0,bodyfat:0}]);
  const [currhealth, setcurrhealth] = useState([
    { BMI: 0, weight: 0, height: 0, bodyfat: 0, age: 0 },
  ]);
  const[difference,setdifference]=useState({weight:0,bodyfat:0});


  async function getgoaldata(){

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
        setdifference({weight:(currhealth[0].weight-goal[0].weight),bodyfat:(currhealth[0].bodyfat-goal[0].bodyfat)})
      });

  }

  useEffect(() => {
    getgoaldata();
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
                    <MDBIcon icon="weight" /> &nbsp; BodyWeight: {difference.weight} kg
                  </div>
                  <br />
                  <div>
                    <MDBIcon icon="percentage" /> &nbsp; BodyFat: {difference.bodyfat} %
                  </div>
                  <br />
                </div>
              </h4>
              <SetGoal curremail={props.curremail} getgoaldata={getgoaldata}></SetGoal>
            </div>
          </MDBCardText>
        </MDBCardBody>
      </div>
    );
}

export default GoalCard;