import styled from "styled-components";

export const StyledSkills = styled.div`
	margin-top: 5rem;
	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.skill {
			position: relative;
			.gauge {
				margin: 0.5rem 1.5rem;
			}
			i {
				position: absolute;
				right: 50;
				top: 40%;
			}
		}
	}
	div.bonus {
		margin-top: 5rem;

		img {
			margin-left: 1rem;
			max-height: 4rem;
			width: auto;
		}
	}
`;
