import React from 'react';
import { Button, Grid } from '@material-ui/core';
import useGameContainer from '../Containers/GameContainer';


const GamePlay = (props) => {
  const { setShowSetup, setShowGamePlay } = props;
  const [teams] = useGameContainer(state => state.computerTeams, actions => null);
  return (
    <div>
      <div>This is the Game Play Screen</div>
      <Grid container >
        <Grid container>
          <Grid item sm={6} style={{ backgroundColor: teams[0].color, color: teams[0].color === 'White' ? 'black' : 'white' }}>
            <h1>{teams[0].type} team </h1>
            <h2>Cards remaining: {teams[0].rouleurDeck.length}</h2>
          </Grid>
          {/* <Grid item sm={6} style={{ backgroundColor: teams[1].color, color: teams[1].color === 'White' ? 'black' : 'white' }}>
            <h1>{teams[1].type} team # {teams[1].number} </h1>
            <h2>Cards remaining: {teams[1].rouleurDeck.length}</h2>
          </Grid> */}
        </Grid>
      </Grid>
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