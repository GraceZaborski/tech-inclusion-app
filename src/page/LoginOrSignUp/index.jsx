import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Card,  Grid, Typography } from "@mui/material";

function LoginOrSignUp() {
  return (
    <>

      <Card
        variant="filled"
        sx={{
          backgroundColor: "white",
          margin: 12,
          display: "flex",
          justifyContent: "center",
          boxShadow: 3,
          borderRadius: 4,
        }}
      >
        <Grid item container alignContent="center" justifyContent="center">
          <Grid container item xs={8} flexWrap="nowrap" flexDirection="column">
            <>
              <Typography
                variant="h2"
                sx={{ fontWeight: "bold", margin: 2, textAlign: "center" }}
              >
                Welcome to NetLearnr!
              </Typography>
              <Button
                component={Link}
                to="/login"
                sx={{
                  bgcolor: "lightblue",
                  color: "black",
                  margin: 3,
                  padding: 6,
                  boxShadow: 3,
                  borderRadius: 4,
                }}
              >
                <Typography variant="h2">Login</Typography>
              </Button>
              <Button
                component={Link}
                to="/signup"
                sx={{
                  bgcolor: "lightblue",
                  color: "black",
                  margin: 3,
                  padding: 6,
                  boxShadow: 3,
                  borderRadius: 4,
                }}
              >
                <Typography variant="h2">Sign Up</Typography>
              </Button>
            </>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}


export default LoginOrSignUp;
