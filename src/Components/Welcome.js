import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TeamNumSelect from './TeamNumberSelect';
import Selector from './Selector';
import Button from '@material-ui/core/Button';
import { mergeClasses } from '@material-ui/styles';
import Setup from './Setup';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
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

function Welcome(props) {
    const classes = styles;
    const [showSetup, setShowSetup] = React.useState(false);
    return (
        <div>
            {
                !showSetup ?
                <div>
                <h1>Welcome to Flamme Rouge Upkeep</h1>
                <h3>Click the Setup to setup your game.</h3>
                <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={setShowSetup}
                >
                Setup
                </Button>
                </div>
                : <Setup setShowSetup={setShowSetup}/>
            }
      </div>
    );

}

export default withStyles(styles)(Welcome);