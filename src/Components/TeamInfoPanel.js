import React, { useState } from 'react';
import useGameContainer from '../Containers/GameContainer';
import { Button, Grid } from '@material-ui/core';
import { capitalize, lower } from '../Utilities/TextHelper';

const TeamInfoPanel = (props) => {
  const { color, teamType, numberOfCards } = props;
  return (
    <>
      <div style={{ height: 100 + '%', width: '100%', border: 2 + `px solid ${color == 'White' ? 'black' : 'white'}`/*, display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: 'url(/images/black.png)'*/ }}>
        <h2>{color} {capitalize(teamType)} Team </h2>
        <h3>Cards remaining: {numberOfCards}</h3>
        {/* <img style={{ width: 200 + 'px' }} src={imgHash[lower(team.color)]} /> */}
      </div>
    </>
  )
}
export default TeamInfoPanel;