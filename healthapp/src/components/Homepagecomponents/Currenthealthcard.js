import axios from "axios";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { useEffect, useState } from "react";
import PostHealthUdpates from '../HealthUpdates/posthealthupdates';

function CurrentHealth(props){
    const [currhealth, setcurrhealth] = useState([{BMI: 0, weight: 0,height:0,bodyfat:0,age:0}]);

    async function getdata() {
      
      await axios
        .get("http://localhost:3000/updates/getlatesthealthdetail/" + props.curremail)
        .then((data) => {
          props.setisLoading(true);
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
                <MDBIcon icon="weight" /> &nbsp; Weight :&nbsp;{" "}
                {currhealth[0].weight} kg
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon icon="ruler-vertical" /> &nbsp; Height :&nbsp;{" "}
                {currhealth[0].height} cm
              </h4>
            </div>
            <br />

            <div>
              <h4>
                <MDBIcon icon="percentage" /> &nbsp; BodyFat :&nbsp;
                {currhealth[0].bodyfat} %
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon far icon="calendar-alt" />
                &nbsp; Age :&nbsp; {currhealth[0].age}
              </h4>
            </div>
            <br />
            <PostHealthUdpates curremail={props.curremail} setisLoading={props.setisLoading()}></PostHealthUdpates>
          </MDBCardText>
        </MDBCardBody>
      </div>
    );

}

export default CurrentHealth;