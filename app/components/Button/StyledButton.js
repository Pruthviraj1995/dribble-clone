import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  ${buttonStyles};
`;

export const StyledDribbleButton = styled.button`
  display: flex;
  padding: 10px 16px;
  color: #fff;
  background-color: #ea4c89;
  font-weight: 500;
  font-size: 14px;
  border-radius: 8px;
  outline: none;
  text-align: center;
  border: none;
  height: 40px;

  :hover {
    background-color: #f082ac;
  }

  &.light {
    background-color: #f3f3f4;
    color: black;

    :hover {
      background-color: #e7e7e9;
    }
  }
`;

export default StyledButton;
