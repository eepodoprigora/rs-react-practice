import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width, margin, ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
	height: 40px;
	margin: ${({ margin = '0 0 10px' }) => margin};
	border: 1px solid #000;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
`;

Input.propTypes = {
	width: PropTypes.string,
	margin: PropTypes.string,
};
