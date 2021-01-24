import react from 'react'
import {MDBCard,MDBDataTable} from 'mdbreact'
import PostHealthUdpates from './HealthUpdates/posthealthupdates';

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
      field: "task",
      sort: "asc",
      width: 270,
    },
    {
      label: "Weight",
      field: "type",
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


function Updates(){
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

          <PostHealthUdpates style={{float:"right"}}></PostHealthUdpates>
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