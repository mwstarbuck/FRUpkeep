import React from 'react';
import Welcome from './Welcome';
import Setup from './Setup';


const Game = () => {
    const [showSetup, setShowSetup] = React.useState(false);
    return (
        <div>

            <Welcome />

        </div>
    );
}

export default Game;