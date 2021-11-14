import React from 'react';

export interface GameState {
    showSetup: boolean,
    showGameplay: boolean
}

export interface GameActions {
    setShowSetup: () => void,
    setShowGameplay: () => void
}
