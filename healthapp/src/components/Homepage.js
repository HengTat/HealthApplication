import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon
} from "mdbreact";
import { useState } from "react";
import CurrentHealth from "./Homepagecomponents/Currenthealthcard";
import GoalCard from "./Homepagecomponents/goalcard";
import Maingraph from "./Homepagecomponents/Maingraph";

function Homepage(props){
  const [isLoading, setisLoading] = useState(true);

    return (
      <div style={{ backgroundColor: "#37474F" }}>
        <br />
        <br />
        <MDBCol>
          <MDBCard
            color="stylish-color-dark"
            style={{ width: "100%", height: "500px" }}
          >
            <MDBCardBody>
              <MDBCardTitle style={{ color: "white" }}>
                <MDBIcon icon="heartbeat" size="lg" /> &nbsp;Your Health
              </MDBCardTitle>
              <MDBCardText>
                <Maingraph></Maingraph>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <br />
        <div class="row">
          <div
            style={{
              padding: "30px",
              paddingTop: 0,
              paddingRight: "15px",
              width: "50%",
            }}
          >
            <MDBCard
              color="stylish-color-dark"
              style={{ width: "100%", height: "450px" }}
            >
              <CurrentHealth curremail={props.curremail} setisLoading={setisLoading}></CurrentHealth>
            </MDBCard>
          </div>
          <div
            style={{
              padding: "30px",
              paddingTop: 0,
              paddingleft: "15px",
              width: "50%",
            }}
          >
            <MDBCard
              color="stylish-color-dark"
              style={{ width: "100%", height: "450px" }}
            >
              <GoalCard curremail={props.curremail} setisLoading={setisLoading}></GoalCard>
            </MDBCard>
          </div>
        </div>
      </div>
    );
}

export default Homepage;