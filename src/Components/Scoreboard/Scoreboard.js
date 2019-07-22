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
    let [isTeam, toggleIsTeam] = useState('player')
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

    const changeScore = (score, id) => {
        const newTeams = teams;
        newTeams.forEach(team => {
            if(team.id === id){
                team.score = score;
            }
        });
        updateTeams([...newTeams]);
    }

    const sortTeams = () => {
        const sortedTeams = teams.sort((a, b) => b.score - a.score);
        updateTeams([...sortedTeams]);
    }

    return (
        <>
            <AppHeader {...{teams, updateTeams, menuOpen, toggleMenuOpen, isTeam, toggleIsTeam, increment, updateIncrement, plusOnes, togglePlusOnes, prepend, togglePrepend, prepended, updatePrepended, append, toggleAppend, appended, updateAppended, zeroOut, toggleZeroOut, double, toggleDouble, halve, toggleHalve, sortTeams}}/>
            <div id="scoreboard" onClick={() => {toggleMenuOpen(false)}} style={{ filter: menuOpen ? 'blur(3px) brightness(80%)' : 'blur(0px)', transform: menuOpen ? 'translateX(-12vw)' : 'translateX(0vw)'}}>
                <ul className="teams">
                    {teams.map(team => 
                        <Team team={team} className="team" key={team.id} teamID={team.id} score={team.score} {...{ append, appended, prepend, prepended, increment, plusOnes, zeroOut, double, halve, isTeam, changeScore }}/>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Scoreboard;