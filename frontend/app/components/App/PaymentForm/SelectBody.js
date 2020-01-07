/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const SelectBody = styled.select`
    width:100%;
    /* Remove select styling */
    appearance: none;
    -webkit-appearance: none;
    /* Ugly Firefox way of doing it */
    -moz-appearance: window;
    text-indent: 0.01px;
    text-overflow: "";
    /* Magic font size number to prevent iOS text zoom */
    font-size:16px;
    font-weight: bold;
    border: none;
    color: #444;
    outline: none;
    /* Padding works surpringly well */
    padding: 9px 13px;
    font-family: helvetica, sans-serif;
    line-height:1.2;
`;
export default SelectBody;
