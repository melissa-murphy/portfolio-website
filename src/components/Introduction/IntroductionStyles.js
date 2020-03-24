import styled from "styled-components";

export const StyledIntroduction = styled.div`
	width: 90vw;
	margin: 0 auto;
	p {
		font-size: ${({ theme }) => theme.fontSizes.normal};
	}
`;
