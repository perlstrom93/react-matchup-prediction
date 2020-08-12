import styled from 'styled-components';

const Button = styled.button`
  color: #CFB53B;
  background-color: black;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid;
  padding: 5px;
  width: 100%;

  &:active,
  &:focus {
    background: #CFB53B;
    color: black;
    outline-color: black;
  }
`;

export default Button;
