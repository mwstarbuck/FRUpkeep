import React from 'react';
import Welcome from './Welcome';
import Setup from './Setup';
import GamePlay from './GamePlay';
import useGameContainer from '../Containers/GameContainer';


const Game = () => {
    // const [showSetup, setShowSetup] = React.useState(false);
    const [showGamePlay, setShowGameplay] = useGameContainer(state => state.showGameplay, actions => actions.setShowGameplay);
    const [showSetup, setShowSetup] = useGameContainer(state => state.showSetup, actions => actions.setShowSetup);
    // const [showGameplay] = useGameContainer(state => state.showGameplay, actions => null);
    return (
        <div>
            {
                !showSetup ?
                    <Welcome setShowSetup={setShowSetup} />
                    : !showGamePlay ? <Setup
                        setShowSetup={setShowSetup}
                        setShowGamePlay={setShowGameplay} />
                        : <GamePlay
                            setShowSetup={setShowSetup}
                            setShowGamePlay={setShowGameplay} />
            }
        </div>
    );
}

export default Game;