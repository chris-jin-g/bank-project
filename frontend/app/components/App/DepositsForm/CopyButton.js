/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const CopyButton = styled.img`
    text-align:center;
    border:1px solid #bcc2cd;
    border-radius:0px 4px 4px 0px;
    width:46px;
    height:auto;
    padding:5px 10px;
    cursor:pointer;
    &:hover{
        background-color:#bcc2cd;
    }
    &:active{
        background-color:#4a5569;
        border:1px solid #19253a;
    }
`;
export default CopyButton;
