import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
    background-color: #FF9000;
    border: 0;
    border-radius: 6px;
    padding: 10px;
    font-size: 10px;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${shade(0.2, '#FF9000')};
    }
`;