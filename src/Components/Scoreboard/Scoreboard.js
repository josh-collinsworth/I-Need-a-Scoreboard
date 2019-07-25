import React, { useState } from 'react';
import './Scoreboard.css';
import Team from '../Team/Team';
import AppHeader from '../AppHeader/AppHeader';

window.onbeforeunload = function () {
    return "Are you sure you want to leave? Your scores will NOT be saved!";
    //if we return nothing here (just calling return;) then there will be no pop-up question at all
    //return;
};



const Scoreboard = () => {

    let [teams, updateTeams] = useState([]);
    let [useTeams, toggleUseTeams] = useState(false)
    let [increment, updateIncrement] = useState(1);
    let [plusOnes, togglePlusOnes] = useState(false);

    let [prepend, togglePrepend] = useState(false);
    let [prepended, updatePrepended] = useState('');

    let [append, toggleAppend] = useState(false);
    let [appended, updateAppended] = useState('');

    let [zeroOut, toggleZeroOut] = useState(false);
    let [menuOpen, toggleMenuOpen] = useState(false);
    let [double, toggleDouble] = useState(false);
    let [halve, toggleHalve] = useState(false);

    let [teamMinWidth, setTeamMinWidth] = useState(12);
    
    let [appFontSize, setAppFontSize] = useState(18);

    const changeScore = (score, id) => {
        const newTeams = teams;
        newTeams.forEach(team => {
            if(team.id === id){
                team.score = score;
            }
        });
        updateTeams([...newTeams]);
    }

    const getPlayerType = capitalize => {
        if(capitalize){
            return useTeams ? 'Team' : 'Player';
        } else {
            return useTeams ? 'team' : 'player';
        }
    }

    const sortTeams = () => {
        const sortedTeams = teams.sort((a, b) => b.score - a.score);
        updateTeams([...sortedTeams]);
    }

    return (
        <>
            <AppHeader {...{teams, updateTeams, menuOpen, toggleMenuOpen, useTeams, toggleUseTeams, increment, updateIncrement, plusOnes, togglePlusOnes, prepend, togglePrepend, prepended, updatePrepended, append, toggleAppend, appended, updateAppended, zeroOut, toggleZeroOut, double, toggleDouble, halve, toggleHalve, sortTeams, getPlayerType, teamMinWidth, setTeamMinWidth, appFontSize, setAppFontSize}}/>
            <div id="scoreboard" onClick={() => {toggleMenuOpen(false)}} style={{ filter: menuOpen ? 'brightness(80%)' : '', fontSize:  appFontSize +  'px' }}>
                <ul className="teams" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${teamMinWidth + (teamMinWidth === 60 ? '%' : 'rem')}, 1fr))`}}>
                    {teams.map(team => 
                        <Team team={team} className="team" key={team.id} teamID={team.id} score={team.score} {...{ append, appended, prepend, prepended, increment, plusOnes, zeroOut, double, halve, useTeams, changeScore, getPlayerType }}/>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Scoreboard;