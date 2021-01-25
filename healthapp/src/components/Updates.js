import react, { useEffect } from 'react'
import {MDBCard,MDBDataTable} from 'mdbreact'
import PostHealthUdpates from './HealthUpdates/posthealthupdates';
import axios from 'axios';

const data = {
  columns: [
    {
      label: "",
      field: "number",
      sort: "asc",
      width: 150,
    },
    {
      label: "Height",
      field: "height",
      sort: "asc",
      width: 270,
    },
    {
      label: "Weight",
      field: "weight",
      sort: "asc",
      width: 270,
    },
    {
      label: "BMI",
      field: "description",
      sort: "asc",
      width: 270,
    },
    {
      label: "Status",
      field: "Status",
      sort: "asc",
      width: 270,
    },
  ],
  rows: [],
};


function Updates(props){

  useEffect(()=>{
    console.log("test");
    axios.get("http://localhost:3000/updates/getcurrenthealthstatus/"+props.curremail).then(data=>data.rows);
  })


    return (
      <div>
        <MDBCard
          style={{
            paddingTop: "40px",
            AlignItems: "center",
            backgroundColor: "#4B515D",
            color: "white",
          }}
        >
          <h2>HealthUpdates</h2>

          <PostHealthUdpates style={{float:"right"}} curremail={props.curremail}></PostHealthUdpates>
        </MDBCard>
        <MDBCard style={{ backgroundColor: "#4B515D" }}>
          <MDBDataTable
            theadColor="darkgrey"
            theadTextWhite
            striped
            bordered
            small
            fixed
            entriesOptions={[1, 5, 10]}
            entries={10}
            data={data}
          />
        </MDBCard>
      </div>
    );
}

export default Updates;