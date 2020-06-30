import styled from "styled-components";

interface Props {
	primary?: boolean;
	secodary?: boolean;
}

export const Container = styled.div<Props>`
	width: 100%;
	max-width: 120px;

	button {
		color: #ddd;
		appearance: none;
		transition: opacity 0.2s ease;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 120px;
		height: 48px;
		border: none;
		border-radius: 5px;
		opacity: 1;
		transition: opacity 0.2s ease;
		svg {
			align-self: auto;
		}

		:hover {
			opacity: 0.8;
		}
	}
`;
