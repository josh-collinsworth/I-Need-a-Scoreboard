import React from 'react';
import './AppHeader.css';
import { Button, Label } from '../../Elements/index';

const AppHeader = ({ teams, updateTeams, menuOpen, toggleMenuOpen, useTeams, toggleUseTeams, increment, updateIncrement, plusOnes, togglePlusOnes, prepend, togglePrepend, prepended, updatePrepended, append, toggleAppend, appended, updateAppended, zeroOut, toggleZeroOut, double, toggleDouble, halve, toggleHalve, sortTeams, getPlayerType, teamMinWidth, setTeamMinWidth, appFontSize, setAppFontSize }) => {

    return (
        <header>
            <Button id="addBtn" onClick={() => {
                updateTeams(teams = [...teams, { id: teams.length, score: 0 }]);
                toggleMenuOpen(false);
            }}>Add {getPlayerType()}</Button>
            <div>
                <Button disabled={teams.length < 2} onClick={sortTeams}>Sort <span className="hide-on-mobile">{getPlayerType()}s</span> by score</Button>
                <Button onClick={() => { toggleMenuOpen(!menuOpen) }}>Game Options</Button>
            </div>
            <aside id="options" style={{ right: menuOpen ? 0 : 'calc(var(--options-width) * -1)' }}>
                <fieldset>
                    <legend>Score display</legend>
                    <div>
                        <Label htmlFor="scoreIncrement">Scores increment by: </Label>
                        <input type="number" id="scoreIncrement" min="1" value={increment} onChange={e => { updateIncrement(e.target.value) }} />
                    </div>
                    <div>
                        <input checked={prepend} onChange={() => { togglePrepend(!prepend) }} type="checkbox" id="prepend" />
                        <Label htmlFor="prepend">Prepend score: </Label>
                        <input type="text" placeholder="ex.: $" disabled={!prepend} value={prepended} onChange={e => updatePrepended(e.target.value)} />
                    </div>
                    <div>
                        <input checked={append} onChange={() => { toggleAppend(!append) }} type="checkbox" id="append" />
                        <Label htmlFor="append">Append score: </Label>
                        <input type="text" placeholder="ex.: 'points'" disabled={!append} value={appended} onChange={e => updateAppended(e.target.value)} />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>{getPlayerType(true)} card button options</legend>
                    <div>
                        <input disabled={increment <= 1} checked={plusOnes} onChange={() => { togglePlusOnes(!plusOnes) }} type="checkbox" id="includeOnes" />
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
                    <legend>Display</legend>
                    <div className="range-holder">
                        <Label htmlFor="teamMinWidth">{getPlayerType(true)} card minimum width:</Label>
                        <input value={teamMinWidth} onChange={e => setTeamMinWidth(Number(e.target.value))} type="range" min="1" max="60" id="teamMinWidth"/>
                    </div>
                    <div className="range-holder">
                        <Label htmlFor="appFontSize">{getPlayerType(true)} font size:</Label>
                        <input value={appFontSize} onChange={e => setAppFontSize(e.target.value)} type="range" min="8" max="42" id="appFontSize"/>
                    </div>
                    <fieldset>
                        <legend>Call participants:</legend>
                    <div>
                        <input checked={!useTeams} type="radio" name="entity" value="player" onChange={e => { toggleUseTeams(!useTeams) }} id="isPlayer" />
                        <Label htmlFor="isPlayer">Players</Label>
                    </div>
                    <div>
                        <input checked={useTeams} type="radio" name="entity" value="team" onChange={e => { toggleUseTeams(!useTeams) }} id="useTeams" />
                        <Label htmlFor="useTeams">Teams</Label>
                    </div>
                        </fieldset>
                </fieldset>
            </aside>
        </header>
    );
}

export default AppHeader;