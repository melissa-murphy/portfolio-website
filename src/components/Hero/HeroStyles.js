import styled from "styled-components";
import goldengate from "../../imgs/goldengate.jpg";

export const StyledHero = styled.div`
	margin-top: 6rem;
	height: 80vh;
	width: 100vw;
	margin-left: 0;
	margin-right: 0;
	background-image: url(${goldengate});
	background-size: cover;
	background-position-x: 80%;
	color: ${({ theme }) => theme.secondary.light};
	h1 {
		padding-top: 5rem;
		font-family: "Rock Salt";
	}
	p {
		text-align: left;
		padding-left: 5rem;
		font-size: ${({ theme }) => theme.fontSizes.normal};
	}
`;
