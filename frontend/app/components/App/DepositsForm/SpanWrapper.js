import styled from 'styled-components';
import { PHONE_LANDSCAPE_VIEWPORT_WIDTH } from 'utils/rwd';
import { PRIMARY_RED } from 'utils/colors';

const SpanWrapper = styled.span`
  text-align: center;
  border: 1px solid #bcc2cd;
  border-radius: 4px 0px 0px 4px;
  padding: 8px 5px 11px 6px;
  width: 280px;
  transform: scale(0.9, 1);
  font-size: 14px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
`;
export default SpanWrapper;