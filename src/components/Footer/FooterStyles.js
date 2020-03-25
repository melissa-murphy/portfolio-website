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
				a {
					color: ${({ theme }) => theme.primary.dark};
					margin-right: 0.5rem;
				}
			}
		}
	}

	div.legal {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: ${({ theme }) => theme.color.gray};
		margin: 0;
		p {
			color: ${({ theme }) => theme.primary.light};
			text-align: right;
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`;
