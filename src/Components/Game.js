import React from 'react';
import Welcome from './Welcome';
import Setup from './Setup';


const Game = () => {
    const [showSetup, setShowSetup] = React.useState(false);
    return (
        <div>
            {
                !showSetup ?
                    <Welcome setShowSetup={setShowSetup} />
                    : <Setup setShowSetup={setShowSetup} />
            }

        </div>
    );
}

export default Game;