import React from 'react';
import globalHook, { Store } from 'use-global-hook';
import TeamNumSelect from '../Components/TeamNumberSelect';
import { createDeckOfCards, ROULEUR_SETUP, SPRINTER_SETUP, EXHAUSTION_CARD } from '../Data/Data';
// import Shuffle from '../Utilities/Shuffle';
export interface Card {
  type: string | any,
  movement: string | any
}

export interface Team {
  type?: string | any,
  number?: number | any,
  color?: string | any
  rouleurDeck?: Array<Card> | any,
  rouleurDiscards?: Array<Card> | any,
  sprinterDeck?: Array<Card> | any,
  sprinterDiscards?: Array<Card> | any
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
  createDecks: (details: any) => void,
  drawCards: () => void
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
  let teams: Array<Team> = [];

  details.forEach((element: any) => {
    let rouleurDeck: Array<object> = [];
    let sprinterDeck = [];
    let team: Team = {
      type: '',
      number: null,
      color: '',
      rouleurDeck: [],
      rouleurDiscards: [],
      sprinterDeck: [],
      sprinterDiscards: []
    }
    team.type = element.type;
    team.number = element.number;
    team.color = element.color;

    if (element.type === 'peloton') {
      team.rouleurDeck = createDeckOfCards(ROULEUR_SETUP, element.type);
      teams.push(team);
    }
    else {
      team.rouleurDeck = createDeckOfCards(ROULEUR_SETUP, element.type);
      team.sprinterDeck = createDeckOfCards(SPRINTER_SETUP, element.type);
      teams.push(team);
    }
  });
  store.setState({ computerTeams: teams })
  console.log(store.state.computerTeams)
}

const drawCards = async (store: Store<GameState, GameActions>) => {
  let teams = [...store.state.computerTeams];
  teams.forEach((team: Team) => {
    let topCard = {};
    if (team.rouleurDeck.length !== 0) {
      topCard = team.rouleurDeck.shift();
      team.rouleurDiscards.unshift(topCard);
    }
    else {
      team.rouleurDiscards.unshift(EXHAUSTION_CARD);
    }
    if (team.type != 'peloton') {
      if (team.sprinterDeck.length != 0) {
        topCard = team.sprinterDeck.shift();
        team.sprinterDiscards.unshift(topCard);
      }
      else {
        team.sprinterDiscards.unshift(EXHAUSTION_CARD);
      }
    }
  });
  store.setState({ computerTeams: teams });
}
const actions = {
  setShowSetup,
  setShowGameplay,
  createDecks,
  drawCards
}

const useGameContainer = globalHook<GameState, GameActions>(React, initialState, actions);
export default useGameContainer;