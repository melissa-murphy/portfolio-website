import styled from "styled-components";
import goldengate from "../../imgs/goldengate.jpg";

export const StyledHero = styled.div`
	height: 80vh;
	background: url(${goldengate});
	background-size: cover;
	background-position-x: 49%;
	color: ${({ theme }) => theme.secondary.light};
`;

export const StyledHeroInfo = styled.div`
	position: relative;
	margin-top: 5rem;
	h1 {
		font-family: "Rock Salt";
	}
	p {
		margin-right: 2rem;
		line-height: 1rem;
		text-align: right;
		font-size: ${({ theme }) => theme.fontSizes.normal};
		color: ${({ theme }) => theme.primary.dark};
	}
`;
