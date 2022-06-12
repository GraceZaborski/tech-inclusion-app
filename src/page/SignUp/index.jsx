import { Link } from "react-router-dom";
import { FormControl, FormLabel, FormControlLabel, TextField, Button, Card, Grid, Typography } from "@mui/material";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

function SignUp() {
  return (
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
          <Grid container item xs={8} flexWrap="nowrap" flexDirection="column">
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", margin: 2, textAlign: "center" }}
            >
              Welcome to NetLearnr! Join the family
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
                <FormControl>
                  <RadioGroup
                    name="gender"
                    value="renee"
                    // onChange={handleInputChange}
                    row
                    sx={{ marginBottom: 3 }}
                  >
                    <FormControlLabel
                      key="I am a tech newbie"
                      value="I am a tech newbie"
                      control={<Radio size="small" />}
                      label="I am a tech newbie"
                    />
                    <FormControlLabel
                      key="I am a tech champion"
                      value="I am a tech champion"
                      control={<Radio size="small" />}
                      label="I am a tech champion"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ marginLeft: 64.2 }}
              >
                Login
              </Button>
              <Grid
                item
                sx={{ margin: 2, display: "flex", justifyContent: "center" }}
              >
                <Typography
                  component={Link}
                  to="/login"
                  variant="p"
                  sx={{
                    onHover: "cursor",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  I already have an account. Take me to Log in
                </Typography>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default SignUp;
