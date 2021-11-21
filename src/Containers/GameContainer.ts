import React from 'react';
import globalHook, { Store } from 'use-global-hook';
import TeamNumSelect from '../Components/TeamNumberSelect';
import { createDeckOfCards, ROULEUR_SETUP, SPRINTER_SETUP } from '../Data/Data';
// import Shuffle from '../Utilities/Shuffle';
export interface Card {
  type: string | any,
  movement: string | any
}

export interface Team {
  type: string | any,
  number: number | any,
  color: string | any
  rouleurDeck: Array<Card> | any,
  rouleurDiscards: Array<Card> | any,
  sprinterDeck: Array<Card> | any,
  sprinterDiscards: Array<Card> | any
}

export type GameState = {
  availableTeams?: Array<object> | any,
  showSetup?: boolean,
  showGameplay?: boolean,
  computerTeams?: Array<Team> | any,
  message?: string
}

export type GameActions = {
  setShowSetup: (value: boolean) => void,
  setShowGameplay: (value: boolean) => void,
  createDecks: (details: any) => void
}

const initialState: GameState = {
  availableTeams: ['Red', 'Green', 'Blue', 'Black', 'White', 'Pink'],
  showSetup: false,
  showGameplay: false,
  computerTeams: [],
  message: ''
}

const setShowSetup = async (store: Store<GameState, GameActions>, value: boolean) => {
  store.setState({ showSetup: value });
}

const setShowGameplay = async (store: Store<GameState, GameActions>, value: boolean) => {
  store.setState({ showGameplay: value });
}

const createDecks = async (store: Store<GameState, GameActions>, details: any) => {
  details.forEach((element: { type: string; }) => {
    let teams: Array<Team> = [];
    let rouleurDeck: Array<object> = [];
    let sprinterDeck = [];
    let team: Team;
    // team.type = element.type;
    if (element.type === 'peloton') {

      createDeckOfCards(ROULEUR_SETUP, rouleurDeck)


    }
  });
}

const actions = {
  setShowSetup,
  setShowGameplay
}

const useGameContainer = globalHook<GameState, GameActions>(React, initialState, actions);
export default useGameContainer;