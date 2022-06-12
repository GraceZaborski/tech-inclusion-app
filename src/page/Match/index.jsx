import {
  Grid,
  Typography,
  Skeleton,
  Button,
  Alert,
  Avatar,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Emoji from "react-emoji-render";

import Usercard from "../../components/Usercard";
import { DEFAULT_USER, DEFAULT_MATCH } from "../../data/profileData";

function Match() {
  const [showMatch, setShowMatch] = useState(false);
  const [showIcebreaker, setShowIcebreaker] = useState(false);

  const fetchMatch = () => {
    const myTimeout = setTimeout(() => {
      setShowMatch(true);
    }, 5000);
  };
  return (
    <Container>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ fontSize: "50px" }}
        marginBottom={5}
      >
        Find my Match
      </Typography>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="nowrap"
      >
        <Grid
          container
          flexDirection="row"
          justifyContent="space-evenly"
          height="100%"
        >
          <Grid container flexDirection="column">
            <Usercard {...DEFAULT_USER} />
          </Grid>
          <Button
            variant="contained"
            onClick={() => fetchMatch()}
            disabled={showMatch}
          >
            <Emoji text={`:handshake:`} style={{ fontSize: 50 }} />
            Find me a Match!
          </Button>
          {showMatch ? (
            <Grid container flexDirection="column">
              <Alert severity="success">
                We have found you a TECH CHAMPION to help you{" "}
              </Alert>
              <Usercard {...DEFAULT_MATCH} />
            </Grid>
          ) : (
            <Skeleton sx={{ height: "100%" }} animation="wave">
              <Usercard {...DEFAULT_MATCH} />
            </Skeleton>
          )}
        </Grid>
        {showMatch && (
          <Grid>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ fontSize: "50px" }}
              marginTop={5}
            >
              Next step
            </Typography>

            <Grid container justifyContent="space-evenly">
              <Button size="large" variant="outlined" color="success">
                Play Search Game
              </Button>{" "}
              <Button
                size="large"
                variant="outlined"
                color="info"
                onClick={() => setShowIcebreaker(true)}
              >
                Give Icebreaker Message First
              </Button>
            </Grid>
            {showIcebreaker && (
              <Alert severity="info">
                <Grid>
                  <Typography variant="h4">
                    <Avatar
                      sx={{
                        width: "100px",
                        height: "100px",
                        bgcolor: "lightblue",
                      }}
                    >
                      {
                        <Emoji
                          text={`:${DEFAULT_USER.emoji}:`}
                          style={{ fontSize: 50 }}
                        />
                      }
                    </Avatar>
                    <Typography
                      variant="body"
                      as="span"
                      sx={{ color: "#2e7d32", fontWeight: "bold" }}
                    >
                      {DEFAULT_USER.username}
                    </Typography>
                    , your question is....
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontSize: "25px",
                      color: "#2e7d32",
                      fontWeight: "bold",
                    }}
                  >
                    "What did you want to become when you were 16?"
                  </Typography>
                  <Button size="large" variant="contained" color="success">
                    Answer this question and play!
                  </Button>{" "}
                </Grid>

                <Grid
                  container
                  justifyContent="flex-end"
                  sx={{ textAlign: "right", marginTop: 10 }}
                >
                  <Typography variant="h4">
                    {" "}
                    We also asked,{" "}
                    <Typography variant="body" as="span">
                      {DEFAULT_MATCH.username}
                    </Typography>
                    <Avatar
                      sx={{
                        width: "100px",
                        height: "100px",
                        bgcolor: "lightblue",
                        marginLeft: "auto",
                      }}
                    >
                      {
                        <Emoji
                          text={`:${DEFAULT_MATCH.emoji}:`}
                          style={{ fontSize: 50 }}
                        />
                      }
                    </Avatar>
                  </Typography>
                  <Typography variant="body" sx={{ fontSize: "25px" }}>
                    "What do you want to be in the future?"
                  </Typography>
                </Grid>
              </Alert>
            )}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Match;
