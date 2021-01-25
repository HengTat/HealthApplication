import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBIcon
} from "mdbreact";
import './nav.css'


function Nav(props){

  function logout(){
    props.setcurremail();
  }

  if(props.curremail!=null){
    return (
      <div style={{ width: "100%", top: 0, position: "fixed", zIndex: 500 }}>
        <MDBNavbar color="stylish-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">
              <div class="row">
                &nbsp; &nbsp;
                <h4>
                  <MDBIcon
                    icon="running"
                    style={{
                      color: "white",
                      verticalAlign: "middle",
                      paddingRight: "10px",
                    }}
                  />
                </h4>
                <p
                  style={{
                    color: "white",
                    paddingTop: "12px",
                    fontSize: "15px",
                  }}
                >
                  HealthApplication
                </p>
              </div>
            </strong>
          </MDBNavbarBrand>
          &nbsp; &nbsp;
          <MDBCollapse id="navbarCollapse3" s navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/homepage">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/healthupdate">Update</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/goals">Goals</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="">Welcome {props.curremail}!</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/editaccount">
                  <MDBIcon icon="cog" /> &nbsp; Edit Account
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="/login"
                  onClick={() => {
                    logout();
                  }}
                >
                  <MDBIcon icon="sign-in-alt" /> &nbsp; Logout
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }

  else{
    return(
    <div>
              <div style={{ width: "100%", top: 0, position: "fixed", zIndex: 500 }}>
        <MDBNavbar color="stylish-color-dark" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">
              <div class="row">
                &nbsp; &nbsp;
                <h4>
                  <MDBIcon
                    icon="running"
                    style={{
                      color: "white",
                      verticalAlign: "middle",
                      paddingRight: "10px",
                    }}
                  />
                </h4>
                <p
                  style={{
                    color: "white",
                    paddingTop: "12px",
                    fontSize: "15px",
                  }}
                >
                  HealthApplication
                </p>
              </div>
            </strong>
          </MDBNavbarBrand>
          &nbsp; &nbsp;
        </MDBNavbar>
      </div>
    </div>
    )
  }
}

export default Nav;