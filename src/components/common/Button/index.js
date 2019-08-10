import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #333399;
  // background: linear-gradient(40deg, #333399, #BA00FF);
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);

  &:hover {
    background: #202086;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #333399;
	`}
`
