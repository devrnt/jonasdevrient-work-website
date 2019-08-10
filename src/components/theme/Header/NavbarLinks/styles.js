import styled from 'styled-components'

export const Wrapper = styled.div`
  a {
    color: #656565;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);

    &:hover {
      color: black;
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 4.2rem;
					letter-spacing: 0.2px;
					font-weight: 400;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 5rem 3.5rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1.5rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
