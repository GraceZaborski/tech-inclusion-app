import useState from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";

function LogIn() {
  return (
    <>
      {
        <>
          <Card
            variant="filled"
            sx={{
              backgroundColor: "white",
              margin: 25,
              display: "flex",
              justifyContent: "center",
              boxShadow: 3,
              borderRadius: 4,
            }}
          >
            <Grid item container alignContent="center" justifyContent="center">
              <Grid
                container
                item
                xs={8}
                flexWrap="nowrap"
                flexDirection="column"
              >
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "bold", margin: 2, textAlign: "center" }}
                >
                  Welcome back to NetLearnr!
                </Typography>
                <form>
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    direction="column"
                  >
                    <TextField
                      id="name-input"
                      name="name"
                      label="Username"
                      sx={{ width: 500 }}
                      type="text"
                    />

                    <TextField
                      id="name-input"
                      name="name"
                      label="Password"
                      type="password"
                      sx={{ margin: 2, width: 500 }}
                    />
                  </Grid>
                  <Button
                    component={Link}
                    to="/findMatch"
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginLeft: 64.2 }}
                  >
                    Login
                  </Button>
                  <Grid
                    item
                    sx={{
                      margin: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      component={Link}
                      to="/signup"
                      variant="p"
                      sx={{
                        onHover: "cursor",
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "black",
                        textDecoration: "none",
                      }}
                    >
                      I don't have an account. Take me to Sign Up
                    </Typography>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Card>
        </>
      }
    </>
  );
}

export default LogIn;
