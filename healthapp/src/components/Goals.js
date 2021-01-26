import {useState,useEffect} from 'react'
import {MDBCard,MDBDataTable} from 'mdbreact';
import SetGoal from './Goals/Setgoal';
import axios from 'axios';
import config from '../config.json'

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
           label: "Weight (kg)",
           field: "weight",
           sort: "asc",
           width: 270,
         },
        {
           label: "BodyFat (%)",
           field: "bodyfat",
           sort: "asc",
           width: 270,
         },
         {
           label: "BMI",
           field: "BMI",
           sort: "asc",
           width: 270,
         },
       ],
       rows: updatedata,
     };

     function getdata() {
       console.log(config.apiserver);
       axios
         .get(
           config.apiserver+"goal/getgoals/" +
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