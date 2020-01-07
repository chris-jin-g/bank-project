/**
 *
 * FormWrapper
 *
 */

import styled from 'styled-components';
import { PRIMARY_BACKGROUND_GREY } from 'utils/colors';

const FormWrapper = styled.div`
  background-color: #fff;
  margin-bottom: 30px;
  min-width:345px;
  border-radius:3px;		
  box-shadow: 0em 0.0625em 0.1875em 0em rgba(0, 0, 0, 0.2),
    0em 0.0625em 0.0625em 0em rgba(0, 0, 0, 0.14),
    0em 0.125em 0.0625em -0.0625em rgba(0, 0, 0, 0.12);
  @media screen and (max-width: 560px) {
  	min-width:300px;
  }
  &:last-child{
    padding:50px 10px;
  }
`;

export default FormWrapper;
