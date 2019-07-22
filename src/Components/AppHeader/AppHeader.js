import React from 'react';
import './AppHeader.css';
import { Button, Label } from '../../Elements/index';

const AppHeader = ({ teams, updateTeams, menuOpen, toggleMenuOpen, isTeam, toggleIsTeam, increment, updateIncrement, plusOnes, togglePlusOnes, prepend, togglePrepend, prepended, updatePrepended, append, toggleAppend, appended, updateAppended, zeroOut, toggleZeroOut, double, toggleDouble, halve, toggleHalve, sortTeams }) => {

    return (
        <header>
            <Button id="addBtn" onClick={() => {
                updateTeams(teams = [...teams, { id: teams.length, score: 0 }]);
                toggleMenuOpen(false);
            }}>Add {isTeam}</Button>
            <Button onClick={() => { toggleMenuOpen(!menuOpen) }}>{isTeam} Options</Button>
            <aside id="options" style={{ right: menuOpen ? 0 : 'calc(var(--options-width) * -1)' }}>
                <fieldset>
                    <legend>Score options</legend>
                    <div>
                        <Label htmlFor="scoreIncrement">Scores increment by: </Label>
                        <input type="number" id="scoreIncrement" min="1" value={increment} onChange={(e) => { updateIncrement(e.target.value) }} />
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
                    <Button onClick={sortTeams}>Re-order {isTeam === 'team' ? 'team' : 'player'}s by current score</Button>
                </fieldset>
                <fieldset>
                    <legend>Extra Buttons</legend>
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
                    <legend>Labeling</legend>
                    <div>
                        <input checked={isTeam === 'player'} type="radio" name="entity" value="player" onChange={(e) => { toggleIsTeam(e.target.value) }} id="isPlayer" />
                        <Label htmlFor="isPlayer">This game is for players</Label>
                    </div>
                    <div>
                        <input checked={isTeam === 'team'} type="radio" name="entity" value="team" onChange={(e) => { toggleIsTeam(e.target.value) }} id="isTeam" />
                        <Label htmlFor="isTeam">This game is for teams</Label>
                    </div>
                </fieldset>
            </aside>
        </header>
    );
}

export default AppHeader;