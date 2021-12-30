import React, { useState } from 'react';
import useGameContainer from '../Containers/GameContainer';
import { Button, Grid } from '@material-ui/core';

const TeamRiderPanel = (props) => {

  const { color, remainingCards, riderType, movementValue } = props;

  return (
    <>
      {/* Rider Type should be displayed here */}
      <div style={{ height: '100%', width: '100%', display: 'inline-flex', justifyContent: 'center', border: 2 + `px solid ${color == 'White' ? 'black' : 'white'}` }}>
        <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Deck</h5> <h3>{remainingCards > 0 ? movementValue : null}</h3></div>
        <div style={{ height: 150 + 'px', width: 100 + 'px', margin: 10 + 'px', border: 2 + `px solid ${color == 'White' ? 'black' : 'white'}`, borderRadius: 5 + 'px' }}><h5>Discard Pile</h5><h3></h3></div>
      </div>
    </>
  )
}

export default TeamRiderPanel;