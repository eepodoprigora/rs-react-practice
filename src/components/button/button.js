import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, disabled, ...props }) => {
	return (
		<button className={className} {...props} disabled={disabled}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #000;
	background-color: #eee;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	margin: ${({ margin = '0' }) => margin};
	height: 32px;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	transition: background-color 0.3s;

	&:hover:not([disabled]) {
		background-color: #c4c4c4;
	}
`;
