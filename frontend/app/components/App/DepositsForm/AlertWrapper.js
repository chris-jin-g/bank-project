/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const AlertWrapper = styled.div`
    width: 400px;
    border-left: 6px solid green;
    border-radius: 13px;
    background-color: #bfd2bd;
    position: fixed;
    top: 80px;
    right: 10px;
    height: 70px;
    color: #0e0202;
    font-size: 18px;
    text-align: left;
    padding: 5px 20px;

    animation: fadeIn ease 0.5s;
    @keyframes fadeIn {
        0% {
          right:-200px;
          opacity:0;
        }
        100% {
            right:10px;
            opacity:1;
        }
      }      
`;
export default AlertWrapper;
