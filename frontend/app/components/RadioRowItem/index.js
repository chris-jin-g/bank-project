/**
 *
 * LabelWrapper
 *
 */

import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const RadioRowItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  width:100%;
  cursor:pointer;
  padding:30px 25px;
  border-bottom:1px solid #f2f4f7;
  justify-content:space-between;  
  &:hover {
    background: #eaeaea;
  }
  &:linked{
    background:red;
  }
`;
export default RadioRowItem;
