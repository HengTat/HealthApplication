import './footer.css'
import {  MDBContainer,  MDBFooter, MDBIcon } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function footer(){
    return (
      <div className="fixed-bottom">
        <MDBFooter
          color="stylish-color"
          className="font-small pt-4 mt-4"
          style={{ textAlign: "center" }}
        >
          <MDBContainer>
            <h2 className="title" style={{ padding: "2px" }}>
              "Health is the greatest wealth"
            </h2>
            <hr style={{backgroundColor:"white", width:"500px"}}></hr>
            <p >Take charge and track your health today!</p>
          </MDBContainer>
         
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              <div className="row" style={{ textAlign: "center" ,alignContent:"center", justifyContent:"center", height:"32px" }}>
                <h2>
                  <MDBIcon
                    icon="running"
                    style={{ color: "white", verticalAlign: "middle", paddingRight:"10px" }}
                  />
                </h2>
                <p
                  style={{ color: "white", paddingTop:"10px", fontSize:"18px"}}
                >
                  HealthApplication
                </p>
              </div>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
}

export default footer;