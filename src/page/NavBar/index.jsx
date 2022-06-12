import { AppBar, Toolbar } from "@mui/material";
import Logo from "./logo.jpg";

function NavBar() {
  return (
    <AppBar>
      <Toolbar sx={{ bgcolor: "white" }}>
        <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
