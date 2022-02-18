import React, { useState } from 'react';
import useGameContainer from '../Containers/GameContainer';
import { Button, Grid } from '@material-ui/core';
import { capitalize, lower } from '../Utilities/TextHelper';
import TeamInfoPanel from './TeamInfoPanel';
import { TEAM_COLORS } from '../Data/TeamColors';
import TeamRiderPanel from './TeamRiderPanel';


const TeamPanel = () => {

  const [teams] = useGameContainer(state => state.computerTeams, actions => null);

  return (
    <>
      <Grid container>
        {
          teams.map((team, index) => {

            return (
              <Grid item sm={6} style={{ /*backgroundImage: 'url(/images/black.png)'*/ backgroundColor: TEAM_COLORS[team.color], color: team.color === 'White' ? 'black' : 'white' }}>
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
                  </Grid>
                  <Grid item sm={4}>
                    {team.type != 'peloton' ?
                      <TeamRiderPanel
                        color={team.color}
                        remainingCards={team.sprinterDiscards.length}
                        riderType="Sprinter"
                        movementValue={team.sprinterDiscards.length > 0 ? team.sprinterDiscards[0].movement : null} />
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