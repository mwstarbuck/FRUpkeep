import React from 'react';
import Welcome from './Welcome';
import Setup from './Setup';
import GamePlay from './GamePlay';


const Game = () => {
    const [showSetup, setShowSetup] = React.useState(false);
    const [showGamePlay, setShowGamePlay] = React.useState(false);
    return (
        <div>
            {
                !showSetup ?
                    <Welcome setShowSetup={setShowSetup} />
                    : !showGamePlay ? <Setup
                        setShowSetup={setShowSetup}
                        setShowGamePlay={setShowGamePlay} />
                        : <GamePlay
                            setShowSetup={setShowSetup}
                            setShowGamePlay={setShowGamePlay} />
            }
        </div>
    );
}

export default Game;