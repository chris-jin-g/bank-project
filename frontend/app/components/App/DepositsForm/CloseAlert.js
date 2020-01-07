/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const CloseAlert = styled.span`
    cursor:pointer;
    position:absolute;
    top: 18px;
    right:20px;
    font-size:20px;
    color:gray;
    &:hover{
        transform:scale(1.1);
    }
    &:active{
        transform:scale(1.05);
    }
`;
export default CloseAlert;
