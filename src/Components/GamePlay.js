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
                <Grid item sm={6} style={{ /*backgroundImage: 'url(/images/black.png)'*/ backgroundColor: team.color, color: team.color === 'White' ? 'black' : 'white' }}>
                  <h2>{team.color} {capitalize(team.type)} Team </h2>
                  <h3>Cards remaining: {team.rouleurDeck.length}</h3>
                  <Grid item sm={12}>
                    <div style={{ display: 'inline-flex' }}>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', display: 'inline-block', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{team.rouleurDeck[0].movement}</h3></div>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', display: 'inline-block', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
                    </div>
                  </Grid>
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