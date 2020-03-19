import styled from "styled-components";

export const StyledFooter = styled.div`
	position: relative;
	height: 60vh;
	margin-top: 5rem;
	padding-top: 2rem;
	background-color: ${({ theme }) => theme.primary.light};
	color: ${({ theme }) => theme.primary.dark};
	div {
		text-align: left;
		margin-left: 2rem;
		div {
			display: flex;
			flex-direction: column;
			line-height: 2rem;
			font-variant: small-caps;
			font-size: ${({ theme }) => theme.fontSizes.normal};

			div {
				display: flex;
				flex-direction: row;
				margin-top: 1rem;
				margin-left: 0;
				i:nth-child(n + 2) {
					margin: 0 0.5rem;
				}
			}
		}
	}

	div.legal {
		position: absolute;
		bottom: 0;
		background-color: ${({ theme }) => theme.color.gray};
		color: ${({ theme }) => theme.primary.light};
		width: 100vw;
		margin: 0;
		height: 2rem;
		padding-right: 0.2rem;
		text-align: right;
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;
