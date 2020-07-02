import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 100%;
	min-height: 48px;
	background: #333;

	display: flex;
	justify-content: space-between;
	align-items: center;

	nav {
		align-self: flex-end;
		display: flex;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
	span {
		margin: 0 0 0 2rem;
		color: #e6af2e;
	}
`;

export const NavLink = styled.div`
	margin: 0 1rem 0 0;
	padding: 1rem;
	align-self: flex-end;
	justify-content: flex-end;
	a {
		font-weight: lighter;
		font-size: 16px;
	}

	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;
