import react from 'react'
import {MDBCard} from 'mdbreact';
import SetGoal from './Goals/Setgoal';

function Goals(){
    return (
      <div>
        <MDBCard style={{ paddingTop: "40px", backgroundColor: "#4B515D" }}>
          <SetGoal></SetGoal>
        </MDBCard>
      </div>
    );

}


export default Goals;