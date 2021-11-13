import React from 'react';
import TeamNumSelect from './TeamNumberSelect';
import Selector from './Selector';

let teamColors = [
    'red',
    'green', 
    'blue',
    'black', 
    'white', 
    'pink', 
]

function Welcome() {

    return (
        <div>
            <h1>Welcome to Flamme Rouge Upkeep</h1>
            <TeamNumSelect />
            {/* <Selector 
                options={teamColors}
            /> */}
      </div>
    );

}

export default Welcome;