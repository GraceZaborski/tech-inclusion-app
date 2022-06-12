import {
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Avatar,
  Slider,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  ADJECTIVES,
  ANIMALS,
  CONFIDENCE_LEVELS,
  DEFAULT_USER,
  HOBBIES,
} from "../../data/profileData";
import Emoji from "react-emoji-render";
import Usercard from "../../components/Usercard";

function Profile() {
  const [randomUserNames, setRandomUserNames] = useState([]);
  const [userData, setUserData] = useState(DEFAULT_USER);

  const generateUsernames = () => {
    let newNames = [];
    while (newNames.length !== 5) {
      let adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
      let animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];

      let profileName = `${adj} ${animal}`;

      if (
        !newNames.find(
          ({ name }) => name.includes(adj) || name.includes(animal)
        )
      ) {
        newNames.push({
          name: profileName,
          emoji: animal,
        });
      }
    }
    setRandomUserNames(newNames);
  };

  const updateUserData = (newData) => {};

  useEffect(() => {
    generateUsernames();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ fontSize: "50px" }}
        marginBottom={5}
      >
        My Game Profile
      </Typography>
      <Grid
        container
        flexDirection="column"
        marginBottom={5}
        justifyContent="center"
      >
        <Typography variant="h2" sx={{ fontSize: "30px" }} marginBottom={2}>
          My Current Profile
        </Typography>
        <Usercard {...userData} />
        <Button variant="outlined" onClick={() => {}} disabled>
          Save These Changes
        </Button>
      </Grid>
      <Grid container justifyContent="center">
        <Typography variant="h2" sx={{ fontSize: "30px" }} marginBottom={2}>
          Update My Details
        </Typography>
        <Grid
          container
          flexDirection="column"
          sx={{ p: 2, border: "1px dashed grey" }}
          marginBottom={5}
        >
          <Typography variant="h5">Choose a New Game Alias</Typography>
          <Grid
            container
            justifyContent="space-evenly"
            flexDirection="row"
            flexWrap="wrap"
          >
            {randomUserNames.map(({ name, emoji }) => (
              <>
                <Chip
                  avatar={
                    <Avatar sx={{ bgcolor: "lightblue" }}>
                      {<Emoji text={`:${emoji}:`} />}
                    </Avatar>
                  }
                  label={name}
                  sx={{ textTransform: "capitalize" }}
                />
              </>
            ))}
          </Grid>
          <Button
            variant="outlined"
            sx={{ marginTop: 5 }}
            onClick={() => generateUsernames()}
          >
            Generate New Names
          </Button>
        </Grid>
        <Grid
          container
          flexDirection="column"
          sx={{ p: 2, border: "1px dashed grey" }}
          marginBottom={5}
        >
          <Typography variant="h5">Choose 3 Hobbies</Typography>
          <Grid
            container
            justifyContent="space-evenly"
            flexDirection="row"
            flexWrap="wrap"
          >
            {HOBBIES.map((hobby) => (
              <Chip label={hobby.toUpperCase()} />
            ))}
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection="column"
          sx={{ p: 2, border: "1px dashed grey" }}
          marginBottom={5}
        >
          <Typography variant="h5">
            How confident are you with using NetLearnr?
          </Typography>
          <Grid container>
            <Grid item container justifyContent="space-between" width="100%">
              {CONFIDENCE_LEVELS.map(({ emoji, tooltip }) => (
                <Tooltip title={tooltip}>
                  <IconButton>
                    <Emoji text={`:${emoji}:`} />
                  </IconButton>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
          <Slider defaultValue={50} step={50} marks min={0} max={100} />
        </Grid>

        <Button variant="outlined" onClick={() => generateUsernames()}>
          I want to change something else
        </Button>
      </Grid>
    </Container>
  );
}

export default Profile;
