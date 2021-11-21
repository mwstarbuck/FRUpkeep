import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Selector from './Selector';
import { Button, Grid, Typography, List } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useGameContainer from '../Containers/GameContainer';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    padding: 5 + 'px'
  },
  input: {
    display: 'none',
  },
});


const teamColors = [
  'red',
  'green',
  'blue',
  'black',
  'white',
  'pink',
]

const teamNumber = [
  1, 2, 3, 4, 5
]


const Setup = (props) => {
  const { classes, setShowSetup, setShowGamePlay } = props;
  const [availableTeams] = useGameContainer(state => state.availableTeams, actions => null); // may make this local send results to container
  const [numberOfTeams, setNumberOfTeams] = React.useState();
  const [, createDecks] = useGameContainer(state => null, actions => actions.createDecks);

  const createTeamDetailsSection = (arr) => {
    for (let i = 0; i < numberOfTeams; i++) {
      let team = new Object()
      if (i === 0) {
        team.type = 'peloton';
        team.number = i;
        // team.color added below when color selected
      }
      else {
        team.type = 'muscle'
        team.number = i;
        // team.color
      }
      arr.push(team);
    }
  }

  let teamComponents = []
  if (numberOfTeams > 0) {
    createTeamDetailsSection(teamComponents);
  }

  const setTeamColor = (id, value) => {
    if (teamComponents.length > 0)
      teamComponents[id].color = value;
  }

  return (
    <div>
      <h1>Flamme Rouge Upkeep Setup</h1>
      <Grid container>
        <Grid item sm={12}>
          <div>
            <Selector
              key={10}
              options={teamNumber}
              label={'Choose # AI Teams'}
              func={setNumberOfTeams} />
            <List>
              {
                teamComponents.length > 0 ?
                  teamComponents.map((s, index) => {
                    return (
                      <Selector
                        key={index}
                        options={availableTeams}
                        label={`choose ${s.type} team ${s.number === 0 ? "" : index} color`}
                        type={s.type}
                        func={setTeamColor}
                        id={s.number} />
                    );
                  }) : null
              }
            </List>
          </div>
          <div>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                createDecks(teamComponents);
                setShowGamePlay(true);
              }}
            >
              Start
            </Button>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => setShowSetup(false)}
            >
              Cancel
            </Button>
          </div>
        </Grid>
        <Grid item sm={12}>
          <Typography variant="h6">Number of Computer controlled teams: {numberOfTeams}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Setup);