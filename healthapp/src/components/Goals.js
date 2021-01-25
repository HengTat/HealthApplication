import react,{useState,useEffect} from 'react'
import {MDBCard,MDBDataTable} from 'mdbreact';
import SetGoal from './Goals/Setgoal';
import axios from 'axios';

function Goals(props){

     const [isLoading, setisLoading] = useState(true);
     const [updatedata, setupdatedata] = useState([]);

     const data = {
       columns: [
         {
           label: "Id",
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
           field: "BMI",
           sort: "asc",
           width: 270,
         },
         {
           label: "Status",
           field: "status",
           sort: "asc",
           width: 270,
         },
       ],
       rows: updatedata,
     };

     function getdata() {
       axios
         .get(
           "http://localhost:3000/updates/getcurrenthealthstatus/" +
             props.curremail
         )
         .then((data) => {
           var i = 1;
           for (var x of data.data) {
             x["number"] = i;
             i++;
           }
           setupdatedata(data.data);
           data.rows = updatedata;
           setisLoading(false);
         });
     }

     useEffect(() => {
       getdata();
     }, []);

     if (isLoading) {
       return <div>Loading...</div>;
     }

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
           <h2>Goals</h2>
           <SetGoal
             style={{ float: "right" }}
             curremail={props.curremail}
             setisLoading={setisLoading}
             getdata={getdata}
           ></SetGoal>
         </MDBCard>
         <MDBCard style={{ backgroundColor: "#4B515D" }}>
           <MDBDataTable
             dark
             theadColor="darkgrey"
             theadTextWhite
             striped
             bordered
             small
             fixed
             hover
             tbodyTextWhite
             entries={8}
             entriesOptions={[1, 5, 8]}
             data={data}
           />
         </MDBCard>
       </div>
     );
}

export default Goals;