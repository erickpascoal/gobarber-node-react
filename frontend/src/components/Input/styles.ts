import styled from 'styled-components'

export const Container = styled.div`
    background-color: #232129;
    border-radius: 6px;
    border: solid 2px #232129;
    padding: 13px;
    width: 100%;
    color: #666360;
    display: flex;
    align-items: center;

    
    & + div {
            margin-top: 5px;
        }

    svg {
        margin-right: 8px;
    }

    input {
        color: #F4EDE8;
        background: transparent;
        flex: 1;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }
`;