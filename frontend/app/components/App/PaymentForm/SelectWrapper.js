/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const SelectWrapper = styled.div`
    position: relative;
    display:block;
    margin-top:0.5em;
    overflow:hidden;
    margin:0 auto;
    width: 90%;
    border: 1px solid #bbb;
    border-radius: 2px;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    height:37px;
    &:after {
        content: '>';
        font: 28px "Consolas", monospace;
        color: #333;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 11px;
        /*Adjust for position however you want*/
        
        top: 3px;
        padding: 0 0 2px;
        /*left line */
        
        position: absolute;
        pointer-events: none;
    }
    @media screen and (min-width: ${PHONE_LANDSCAPE_VIEWPORT_WIDTH}) {
        width: ${props => (props.large ? '17rem' : '315px')};
      }
`;
export default SelectWrapper;
