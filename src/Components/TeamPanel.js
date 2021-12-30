import React, { useState } from 'react';
import useGameContainer from '../Containers/GameContainer';
import { Button, Grid } from '@material-ui/core';
import { capitalize, lower } from '../Utilities/TextHelper';
import TeamInfoPanel from './TeamInfoPanel';
import TeamRiderPanel from './TeamRiderPanel';


const TeamPanel = () => {

  const [teams] = useGameContainer(state => state.computerTeams, actions => null);

  return (
    <>
      <Grid container>
        {
          teams.map((team, index) => {

            return (
              <Grid item sm={6} style={{ /*backgroundImage: 'url(/images/black.png)'*/ backgroundColor: team.color, color: team.color === 'White' ? 'black' : 'white' }}>
                <Grid container>
                  <Grid item sm={4}>
                    <TeamInfoPanel
                      color={team.color}
                      teamType={team.type}
                      numberOfCards={team.rouleurDeck.length} />
                  </Grid>
                  <Grid item sm={4}>
                    <TeamRiderPanel
                      color={team.color}
                      remainingCards={team.rouleurDiscards.length}
                      riderType="Rouleur"
                      movementValue={team.rouleurDiscards.length > 0 ? team.rouleurDiscards[0].movement : null} />
                    {/* <div style={{ height: '100%', width: '100%', display: 'inline-flex', justifyContent: 'center', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}` }}>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{team.rouleurDiscards.length > 0 ? team.rouleurDiscards[0].movement : null}</h3></div>
                      <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
                    </div> */}
                  </Grid>
                  <Grid item sm={4}>
                    {team.type != 'peloton' ?
                      <TeamRiderPanel
                        color={team.color}
                        remainingCards={team.sprinterDiscards.length}
                        riderType="Sprinter"
                        movementValue={team.sprinterDiscards.length > 0 ? team.sprinterDiscards[0].movement : null} />
                      // <div style={{ height: '100%', width: '100%', display: 'inline-flex', justifyContent: 'center', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}` }}>
                      //   <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{team.sprinterDiscards.length > 0 ? team.sprinterDiscards[0].movement : null}</h3></div>
                      //   <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${team.color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
                      // </div>
                      : null
                    }
                  </Grid>
                </Grid>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}

export default TeamPanel;