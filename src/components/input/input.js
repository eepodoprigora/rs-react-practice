import styled from 'styled-components';
import { forwardRef } from 'react';

const InputContainer = forwardRef(({ className, width, mrgin, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	height: 40px;
	margin: ${({ margin = '0 0 10px' }) => margin};
	border: 1px solid #000;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
`;
