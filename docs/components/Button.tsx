import styled from '@emotion/styled';

const Button = styled.button`
  min-height: 2.5rem;
  padding-block: 0.25rem;
  padding-inline: 1.5rem;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0.5rem;
  margin: 1rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1;
  color: #054da7;
  background-color: #ddf1ff;
  font-weight: bold;
  text-transform: uppercase;
  color: #0070f3;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export default Button;
