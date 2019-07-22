import React, { useState, useRef, useEffect } from 'react';
import './Team.css';
import Button from '../../Elements/Button'

const Team = ({ increment, plusOnes, zeroOut, double, halve, prepend, prepended, append, appended, teamID, useTeams, score, changeScore, getPlayerType }) => {

    let [name, updateName] = useState(`${getPlayerType(true)} ${teamID + 1}`);
    let [changingName, toggleChangingName] = useState(true);
    const inputEl = useRef(null); //Helps us auto-select input when a new team is added
    
    increment = Number(increment); //Will be a string; we wanna convert it for MATH!

    useEffect(()=>{
        if(inputEl.current) {
            inputEl.current.select();
        }
    }, []);

    return (
        <li className="team">
            <div>
                {changingName ?
                    <>
                        <input 
                            ref={inputEl}
                            type="text" 
                            autoFocus
                            onBlur={() => { toggleChangingName(!changingName) }}
                            value={name} 
                            onChange={e => { updateName(name = e.target.value) }}
                                onClick={() => { toggleChangingName(!changingName) }}
                            onKeyPress={e => { toggleChangingName(e.key === 'Enter' ? !changingName : changingName) }}
                        />
                        <small><i>[Click anywhere to save]</i></small>
                    </>
                :
                    <>
                        <h2 onClick={()=> toggleChangingName(!changingName)}>{name}</h2>
                        <button className="nameChangeBtn" onClick={() => { toggleChangingName(!changingName) }}>
                            {changingName ? `OK` : `Change ${getPlayerType()} name`}
                        </button>
                    </>
                }
            </div>

            <p className="score">
                {prepend && <span class="prepend">{prepended}</span>}
                {score}
                {append && <span class="prepend">{appended}</span>}
            </p>
            {plusOnes && 
                <>
                    <Button className="scoreButton" onClick={()=>{ changeScore(score - 1, teamID )}}> -1 </Button>
                    <Button className="scoreButton" onClick={()=>{ changeScore(score + 1, teamID )}}> +1 </Button>
                </>
            }
            <Button className="scoreButton" onClick={()=>{ changeScore(score - increment, teamID )}}> -{increment} </Button>
            <Button className="scoreButton" onClick={()=>{ changeScore(score + increment, teamID )}}> +{increment} </Button>
            
            {double && <Button className="scoreButton" onClick={() => { changeScore(score * 2, teamID) }}>×2</Button>}

            {halve && <Button className="scoreButton" onClick={() => { changeScore(score / 2, teamID) }}>÷2</Button>}
          
            {zeroOut && <Button className="scoreButton zero-out" onClick={() => { changeScore(score = 0, teamID) }}> Reset to 0 </Button>}

            <div className="smacks">
                {/* <span>
                    <span role="img" aria-label="target">🎯</span> 
                    <span role="img" aria-label="target">🎯</span> 
                    <span role="img" aria-label="target">🎯</span>
                </span>           
                <span>
                    <span role="img" aria-label="smack">✋</span>
                </span>
                {plusOnes && <span>+1</span>} */} 
            </div>

        </li>
    )
}

export default Team;