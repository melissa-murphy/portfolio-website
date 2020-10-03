import styled from "styled-components";

export const StyledIntroduction = styled.div`
	width: 90vw;
	margin: 5rem auto;
	p {
		font-size: ${({ theme }) => theme.fontSizes.normal};
		/* text-align: justify; */
	}
`;
