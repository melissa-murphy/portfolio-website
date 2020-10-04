import styled from "styled-components";

export const MobileMenuHeader = styled.div`
	display: flex;
	flex-direction: row;
	width: 100vw;
	h1 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.color.primary};
		margin-right: 2rem;
		margin-left: auto;
		
	}
`;

export const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: ${({ theme }) => theme.color.primary};
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s ease-in-out;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	z-index: ${({ open }) => (open ? 9999 : "auto")};
	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 100%;
	}

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: ${({ theme }) => theme.color.dark};
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			color: ${({ theme }) => theme.color.secondary};
		}
	}
`;
