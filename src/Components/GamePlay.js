import React from 'react';
import { Button, Grid } from '@material-ui/core';


const GamePlay = (props) => {
    const { setShowSetup, setShowGamePlay } = props
    return (
        <div>
            <div>This is the Game Play Screen</div>
            <Button
                variant="outlined"
                onClick={() => {
                    setShowGamePlay(false);
                    setShowSetup(false);
                }
                }>
                End Game
            </Button>
        </div>
    )
}

export default GamePlay;