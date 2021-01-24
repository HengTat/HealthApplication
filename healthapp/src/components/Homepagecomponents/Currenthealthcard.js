import react from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
import PostHealthUdpates from '../HealthUpdates/posthealthupdates';

function CurrentHealth(){
    return (
      <div>
        <MDBCardBody style={{ color: "white" }}>
          <MDBCardTitle>
            <MDBIcon icon="hand-holding-heart" />
            &nbsp;Current Health
          </MDBCardTitle>
          <MDBCardText style={{ color: "white" }}>
            <br />
            <div>
              <h4>
                <MDBIcon icon="balance-scale" /> &nbsp; BMI :&nbsp; 20
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon icon="weight" /> &nbsp; Weight :&nbsp; 80 kg
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon icon="ruler-vertical" /> &nbsp; Height :&nbsp; 170 cm
              </h4>
            </div>
            <br />

            <div>
              <h4>
                <MDBIcon icon="percentage" /> &nbsp; BodyFat :&nbsp;17 %
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon far icon="calendar-alt" />
                &nbsp; Age :&nbsp; 20
              </h4>
            </div>
            <br />
            <PostHealthUdpates></PostHealthUdpates>
          </MDBCardText>
        </MDBCardBody>
      </div>
    );

}

export default CurrentHealth;