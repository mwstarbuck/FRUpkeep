import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Selector from './Selector';
import Button from '@material-ui/core/Button';
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
    const [availableTeams] = useGameContainer(state => state.availableTeams, actioons => null); // may make this local send results to container
    const [numberOfTeams, setNumberOfTeams] = React.useState();
    return (
        <div>
            <h1>Flamme Rouge Upkeep Setup</h1>
            <div>
                <Selector
                    options={teamNumber}
                    label={'Choose # AI Teams'} />
                <Selector
                    options={availableTeams}
                    label={'choose a color...'}
                />
            </div>
            <div>
                <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={() => {
                        setShowGamePlay(true)
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
        </div>
    )
}

export default withStyles(styles)(Setup);