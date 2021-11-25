import React from 'react';
import { Button, Grid } from '@material-ui/core';
import useGameContainer from '../Containers/GameContainer';
import { capitalize, lower } from '../Utilities/TextHelper';
import black from '../img/black.png';
import pink from '../img/pink.png';
import white from '../img/white.png';

const imgHash = {
  'black': black,
  'white': white,
  'pink': pink
}

const GamePlay = (props) => {
  const { setShowSetup, setShowGamePlay } = props;
  const [teams] = useGameContainer(state => state.computerTeams, actions => null);
  const [, drawCards] = useGameContainer(state => null, actions => actions.drawCards);

  return (
    <div>
      <div>This is the Game Play Screen</div>
      <Grid container>
        {
          teams.map((team, index) => {
            return (
              <Grid item sm={6} style={{ /*backgroundImage: 'url(/images/black.png)'*/ backgroundColor: team.color, color: team.color === 'White' ? 'black' : 'white' }}>
                <Grid container>
                  <Grid item sm={4}>
                    <div style={{ height: 100 + '%', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}` }}>
                      <h2>{team.color} {capitalize(team.type)} Team </h2>
                      <h3>Cards remaining: {team.rouleurDeck.length}</h3>
                      {/* <img style={{ width: 200 + 'px' }} src={imgHash[lower(team.color)]} /> */}
                    </div>
                  </Grid>
                  <Grid item sm={4}>
                    <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'center', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}` }}>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{team.rouleurDiscards.length > 0 ? team.rouleurDiscards[0].movement : null}</h3></div>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
                    </div>
                  </Grid>
                  <Grid item sm={4}>
                    {team.type != 'peloton' ?
                      <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'center', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}` }}>
                        <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{team.sprinterDiscards.length > 0 ? team.sprinterDiscards[0].movement : null}</h3></div>
                        <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
                      </div>
                      : null
                    }
                  </Grid>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
      <Button
        variant="outlined"
        onClick={() => {
          drawCards()
        }
        }>
        Draw Cards
      </Button>
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