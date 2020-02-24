import styled from "styled-components";

export const StyledIntroduction = styled.div`
	max-width: 90vw;
    margin: 0 auto;

	h2 {
		font-size: ${({ theme }) => theme.fontSizes.normal};
	}
`;
