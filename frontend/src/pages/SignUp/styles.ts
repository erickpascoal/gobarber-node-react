import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/images/background-sign-up.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    justify-content: center;
    align-items: center;

    img {
        height: 100px;
    }

    form {
        margin-top: 40px;
        display: flex;
        width: 230px;
        flex-direction: column;
        text-align: center;

        h1 {
            font-size: 16px;
            margin-bottom: 16px;
        }
    }

    > a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            font-size: 10px;
            color: #F4EDE8;
            margin-top: 40px;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }

            svg {
                margin-right: 8px;
            }
        }   
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`