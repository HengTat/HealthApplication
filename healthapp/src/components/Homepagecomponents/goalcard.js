import react from 'react';
import {
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";


function GoalCard(){
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
                  <div>Current Goal</div>
                  <br />
                  <div>
                    <MDBIcon icon="weight" /> &nbsp;BodyWeight: 65 kg
                  </div>
                  <br />
                  <div>
                    <MDBIcon icon="percentage" /> &nbsp; Body Fat: 13%
                  </div>
                  <br />
                </div>
                <div>
                  <div>Difference</div> <br />
                  <div>
                    <MDBIcon icon="weight" /> &nbsp; BodyWeight: 12 kg{" "}
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