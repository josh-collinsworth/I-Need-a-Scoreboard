import React, { useState } from 'react';
import './Scoreboard.css';
import Team from '../Team/Team';
import {Button, Label} from '../../Elements/index';

window.onbeforeunload = function () {
    return "Are you sure you want to leave? Your scores will NOT be saved!";
    //if we return nothing here (just calling return;) then there will be no pop-up question at all
    //return;
};

const Scoreboard = () => {

    let [teams, addTeam] = useState([]);
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

    return (
        <>
            <header>
                <Button id="addBtn" onClick={() => { addTeam(teams = [...teams, {id: teams.length} ] ) }}>Add {isTeam}</Button>
                <Button onClick={() => { toggleMenuOpen(!menuOpen) }}>{isTeam} Options</Button>
                <aside id="options" style={{ right: menuOpen ? 0 : 'calc(var(--options-width) * -1)'}}>
                    <fieldset>
                        <legend>Score options</legend>
                        <div>
                            <Label htmlFor="scoreIncrement">Scores increment by: </Label>
                            <input type="number" id="scoreIncrement" min="1" value={increment} onChange={(e)=>{updateIncrement(e.target.value)}}/>
                        </div>
                        <div>
                            <input checked={prepend} onChange={() => { togglePrepend(!prepend) }} type="checkbox" id="prepend" />
                            <Label htmlFor="prepend">Prepend score: </Label>      
                            <input type="text" placeholder="ex.: $" disabled={!prepend} value={prepended} onChange={(e) => updatePrepended(e.target.value)} />             
                        </div>
                        <div>
                            <input checked={append} onChange={() => { toggleAppend(!append) }} type="checkbox" id="append" />
                            <Label htmlFor="append">Append score: </Label>                    
                            <input type="text" placeholder="ex.: 'points'" disabled={!append} value={appended} onChange={(e) => updateAppended(e.target.value)} />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Extra Buttons</legend>
                        <div>
                            <input disabled={increment <= 1} checked={plusOnes} onChange={()=>{togglePlusOnes(!plusOnes)}}type="checkbox" id="includeOnes"/>
                            <Label htmlFor="includeOnes">Add +1/-1 buttons</Label>
                        </div>
                        <div>
                            <input checked={zeroOut} onChange={() => { toggleZeroOut(!zeroOut) }} type="checkbox" id="zeroOut" />
                            <Label htmlFor="zeroOut">Add "reset to zero" button</Label>
                        </div>
                        <div>
                            <input checked={double} onChange={() => { toggleDouble(!double) }} type="checkbox" id="double" />
                            <Label htmlFor="double">Add "2x" button</Label>
                        </div>
                        <div>
                            <input checked={halve} onChange={() => { toggleHalve(!halve) }} type="checkbox" id="halve" />
                            <Label htmlFor="halve">Add "1/2" button</Label>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Labeling</legend>
                        <div>
                            <input checked={isTeam === 'player'} type="radio" name="entity" value="player" onChange={(e) => { toggleIsTeam(e.target.value) }}  id="isPlayer" />
                            <Label htmlFor="isPlayer">This game is for players</Label>
                        </div>
                        <div>
                            <input checked={isTeam === 'team'} type="radio" name="entity" value="team" onChange={(e) => { toggleIsTeam(e.target.value) }}  id="isTeam" />
                            <Label htmlFor="isTeam">This game is for teams</Label>
                        </div>
                    </fieldset>
                </aside>
            </header>
            <div id="scoreboard" style={{ filter: menuOpen ? 'blur(3px) brightness(80%)' : 'blur(0px)', transform: menuOpen ? 'scaleX(.9) translateX(-12vw)' : 'scaleX(1) translateX(0vw)'}}>
                <ul className="teams">
                    {teams.map(team => 
                        <Team team={team} className="team" key={team.id} teamID={team.id} {...{ append, appended, prepend, prepended, increment, plusOnes, zeroOut, double, halve, isTeam }}/>
                    )}
                </ul>
            </div>
        </>
    )
}

export default Scoreboard;