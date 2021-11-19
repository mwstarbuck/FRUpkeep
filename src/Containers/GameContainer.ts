import React from 'react';
import globalHook, { Store } from 'use-global-hook';

export type GameState = {
    availableTeams?: Array<object> | any,
    showSetup?: boolean,
    showGameplay?: boolean,
    message?: string
}

export type GameActions = {
    setShowSetup: (value: boolean) => void,
    setShowGameplay: (value: boolean) => void
}

const initialState: GameState = {
    availableTeams: ['Red', 'Green', 'Blue', 'Black', 'White', 'Pink'],
    showSetup: false,
    showGameplay: false,
    message: ''
}

const setShowSetup = async (store: Store<GameState, GameActions>, value: boolean) => {
    store.setState({ showSetup: value });
}

const setShowGameplay = async (store: Store<GameState, GameActions>, value: boolean) => {
    store.setState({ showGameplay: value });
}

const actions = {
    setShowSetup,
    setShowGameplay
}

const useGameContainer = globalHook<GameState, GameActions>(React, initialState, actions);
export default useGameContainer;