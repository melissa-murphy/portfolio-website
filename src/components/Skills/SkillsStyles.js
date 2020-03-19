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
			small {
				position: absolute;
				right: 50;
				top: 30%;
			}
		}
	}
	.bonus {
		margin-top: 5rem;
		display: flex;
		align-items: center;
		img {
			padding-left: 0.25rem;
			height: 3rem;
			width: auto;
		}
	}
	.bonus-list {
		display: flex;
		flex-direction: column;
		font-size: ${({ theme }) => theme.fontSizes.small};

	}
`;
