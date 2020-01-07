/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const ConfrimButton = styled.button`
    width:120px;
    height:40px;
    padding:6px 15px;
    background-color:#0098db;
    border-radius: 5px;
    color:white;
    font-size:22px;
    transition:0.5s;
    margin-top:20px;
    cursor:pointer;
    &:after{
        content: '»';
        font-size:30px;
        position: relative;
        opacity: 0;
        top: -34px;
        left: -25px;
        transition: 0.5s;
    }
    &:hover{
        padding:6px 25px 0px 5px;
    }
    &:hover:after{
        opacity:1;
        left:53px;
    }
`;
export default ConfrimButton;
