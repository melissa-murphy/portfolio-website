import styled from "styled-components";
import goldengate from "../../imgs/goldengate.jpg";

export const StyledHero = styled.div`
	height: 90vh;
	background: url(${goldengate});
	background-size: cover;
	background-position-x: 49%;
	color: ${({ theme }) => theme.secondary.light};
`;

export const StyledHeroInfo = styled.div`
	position: relative;
	margin-top: 7rem;
	h1 {
		font-family: "Rock Salt";
		padding-top: 0.5rem;
		text-shadow: 2px 2px 5px ${({ theme }) => theme.primary.dark};
	}
	p {
		margin-right: 2rem;
		line-height: 0.85rem;
		text-align: right;
		font-size: ${({ theme }) => theme.fontSizes.normal};
		color: ${({ theme }) => theme.secondary.light};
		text-shadow: 2px 2px 5px ${({ theme }) => theme.primary.dark};
	}
`;
