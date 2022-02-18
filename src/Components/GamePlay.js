import React from 'react';
import { Button } from '@material-ui/core';
import useGameContainer from '../Containers/GameContainer';
import { capitalize, lower } from '../Utilities/TextHelper';
import black from '../img/black.png';
import pink from '../img/pink.png';
import white from '../img/white.png';
import TeamPanel from './TeamPanel';

const imgHash = {
  'black': black,
  'white': white,
  'pink': pink
}

const GamePlay = (props) => {
  const { setShowSetup, setShowGamePlay } = props;
  const [, drawCards] = useGameContainer(state => null, actions => actions.drawCards);

  return (
    <div>
      <div>This is the Game Play Screen</div>
      <TeamPanel />
      <div style={{ marginTop: '25px' }}>
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
    </div>
  )
}

export default GamePlay;