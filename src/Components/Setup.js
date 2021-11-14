import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Selector from './Selector';
import Button from '@material-ui/core/Button';
import { mergeClasses } from '@material-ui/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
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
    const {classes, setShowSetup} = props;
    return (
        <div>
            <h1>Flamme Rouge Upkeep Setup</h1>
            <div>
            <Selector 
                options={teamNumber}
                label={'Choose # AI Teams'}/>
            <Selector 
                options={teamColors}
                label={'choose a color...'}
            />
            </div>
            <div>
            <Button /*style={{margin: 10 + 'px'}}*/
                variant="outlined"
                className={classes.button}
            >
                Start
            </Button>
            <Button 
                variant="outlined"
                className={classes.button}
                onClick={setShowSetup}
            >
                Cancel
            </Button>
            </div>
        </div>
    )
}

export default withStyles(styles)(Setup);