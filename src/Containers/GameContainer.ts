import React from 'react';
import globalHook, {Store} from 'use-global-hook';

export interface GameState {
    showSetup?: boolean,
    showGameplay?: boolean
}

export interface GameActions {
    setShowSetup: (value: any) => void,
    setShowGameplay: (value: any) => void
}

const initialState: GameState = {
    showSetup: false,
    showGameplay: false
}

const setShowSetup = (store: Store<GameState, GameActions>, value: boolean) => {
    store.setState({showSetup: value});
}

const setShowGameplay = (store: Store<GameState, GameActions>, value: boolean) => {
    store.setState({showGameplay: value});
}

const actions = {
    setShowSetup,
    setShowGameplay
}

const useGameContainer = globalHook<GameState, GameActions>(React, initialState, actions);
export default useGameContainer;