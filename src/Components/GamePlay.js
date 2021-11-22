import React from 'react';
import { Button, Grid } from '@material-ui/core';
import useGameContainer from '../Containers/GameContainer';
import { capitalize } from '../Utilities/TextHelper';


const GamePlay = (props) => {
  const { setShowSetup, setShowGamePlay } = props;
  const [teams] = useGameContainer(state => state.computerTeams, actions => null);

  return (
    <div>
      <div>This is the Game Play Screen</div>
      <Grid container >
        <Grid container>
          {
            teams.map((team, index) => {
              return (
                <Grid item sm={6} style={{ backgroundColor: team.color, color: team.color === 'White' ? 'black' : 'white' }}>
                  <h1>{team.color} {capitalize(team.type)} Team </h1>
                  <h2>Cards remaining: {team.rouleurDeck.length}</h2>
                </Grid>
              )
            })
          }
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