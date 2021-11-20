import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useGameContainer from '../Containers/GameContainer';

const styles = theme => ({
  button: {
    margin: theme.spacing(0),
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

function Welcome(props) {
  const { classes, setShowSetup } = props
  // const [showSetup, setShowSetup] = useGameContainer(state => state.showSetup, actions => actions.setShowSetup);
  return (
    <div>
      {
        <div>
          <h1>Welcome to Flamme Rouge Upkeep</h1>
          <h3>Click the Setup to setup your game.</h3>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => setShowSetup(true)}
          >
            Setup
          </Button>
        </div>
      }
    </div>
  );

}

export default withStyles(styles)(Welcome);