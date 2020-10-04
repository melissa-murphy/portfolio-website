import styled from "styled-components";

export const ResumeIntro = styled.div`
	h4 {
		text-align: right;
		padding-right: 2rem;
		margin-top: -2rem;
	}
	p {
		text-align: justify;
		padding: 0 2rem;
	}
`;

export const ResumeExpertise = styled.div`
	text-align: left;
	h5 {
		margin-left: 2rem;
	}
`;

export const ResumeExperience = styled.div`
	text-align: left;
    margin-right: 2rem;
	h5, h6 {
		margin-left: 2rem;
	}
    p {
        margin-left: 2rem;
    }
    ul {
        margin-left: 1rem;
    }
`;
