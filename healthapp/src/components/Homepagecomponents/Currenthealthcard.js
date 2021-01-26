import axios from "axios";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import { useEffect, useState } from "react";
import PostHealthUdpates from '../HealthUpdates/posthealthupdates';
import config from "../../config.json";


function CurrentHealth(props){
    const [currhealth, setcurrhealth] = useState([{BMI: 0, weight: 0,height:0,bodyfat:0,age:0}]);

    async function gethealthdata() {
      await axios
        .get(config.apiserver+"updates/getlatesthealthdetail/" + props.curremail)
        .then((data) => {
          if(data.data.length!==0){
             setcurrhealth(data.data);
          }
        });
    }

    useEffect(() => {
      gethealthdata();
    },[]);



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
                <MDBIcon icon="balance-scale" /> &nbsp; BMI :&nbsp; 0
              </h4>
            </div>
            <br />
            <div>
              <h4>
                <MDBIcon icon="weight" /> &nbsp; Weight :&nbsp;
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
            <PostHealthUdpates curremail={props.curremail} gethealthdata={gethealthdata} ></PostHealthUdpates>
          </MDBCardText>
        </MDBCardBody>
      </div>
    );

}

export default CurrentHealth;