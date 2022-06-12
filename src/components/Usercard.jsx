import { Avatar, Card, Chip, Grid, Paper, Typography } from "@mui/material";
import Emoji from "react-emoji-render";
import { CONFIDENCE_LEVELS } from "../data/profileData";

function Usercard({ username, hobbiesList, role, confidence, emoji }) {
  return (
    <>
      <Paper elevation={3} sx={{ marginBottom: 3 }}>
        <Card variant="filled">
          <Grid container flexDirection="row" flexWrap="nowrap">
            <Grid item container alignContent="center" justifyContent="center">
              <Avatar
                sx={{ width: "100px", height: "100px", bgcolor: "lightblue" }}
              >
                {<Emoji text={`:${emoji}:`} style={{ fontSize: 50 }} />}
              </Avatar>
            </Grid>
            <Grid
              container
              item
              xs={12}
              flexWrap="nowrap"
              flexDirection="column"
            >
              <>
                <Typography
                  variant="button"
                  sx={{ fontWeight: "bold", marginTop: 2 }}
                  as="p"
                >
                  Game Alias:
                </Typography>
                <Chip label={username} sx={{ bgcolor: "lightblue" }} />
              </>

              <Typography
                variant="button"
                sx={{ fontWeight: "bold", marginTop: 2 }}
                as="p"
              >
                Hobbies:
              </Typography>
              <Grid container flexWrap="nowrap" justifyContent="space-evenly">
                {hobbiesList.map((hobby) => (
                  <Chip label={hobby} sx={{ bgcolor: "lightblue" }} />
                ))}
              </Grid>

              <Typography
                variant="button"
                sx={{ fontWeight: "bold", marginTop: 2 }}
                as="p"
              >
                I am a:
                <Typography as="p">{role}</Typography>
              </Typography>
              <Typography
                variant="button"
                sx={{ fontWeight: "bold", marginTop: 2 }}
              >
                Application Confidence:
                <Typography as="p">
                  {
                    CONFIDENCE_LEVELS.find(({ level }) => level === confidence)
                      .tooltip
                  }
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </>
  );
}

export default Usercard;
