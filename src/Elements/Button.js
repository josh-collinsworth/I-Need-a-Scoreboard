import styled from 'styled-components';

const Button = styled.button`
    transition: background-color .15s ease-in-out;
    padding: .4em;
    border: 2px solid;
    font-weight: bold;
    border-radius: 4px;
    font-size: 1rem;
    font-family: 'Rubik';
    color: inherit;
    text-transform: capitalize;
    cursor: pointer;
    &:not(:disabled)hover {
        background-color: var(--yellow);
    }
`

export default Button;